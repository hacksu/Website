var fs = require("fs")
var MailingList = require("../email/list");
var config = require("../config")
var request = require('request');
var mongodb =  require('mongodb');
var MongoClient = mongodb.MongoClient


var express = require('express');
var router = express.Router();

var mailingList = new MailingList(config.mailingList.url, config.mailingList.list, config.mailingList.password, false)
mailingList.connect(function (success) {
    if (success) {
        console.log("Connected to MailingList");
    } else {
        console.log("failed to login");
    }
})



function authentication (req, res, next) {
    const CLIENT_ID = "172522245692-jcibsu3m69hs8un6ib4hum10voulgs9c.apps.googleusercontent.com";

    if (req.body) {
        if (req.body.token) {
            request({url:"https://www.googleapis.com/oauth2/v3/tokeninfo", qs: {access_token: req.body.token}}, (error, response, body) => {
                var authentication_responce = JSON.parse(body);
                if (authentication_responce.aud === CLIENT_ID) {
                    if (config.users.includes(authentication_responce.sub)) {
                        req.authenticated = true;
                        req.userid = authentication_responce.sub;
                    } else {
                        req.authenticated = false;
                        req.userid = authentication_responce.sub;
                    }
                } 
                console.log(body)
                next();
            });
        } else {
            console.log("json but no token" ,req.json)
            next();
        }
    } else {
            console.log("no json", req.body)
            next();
        }
}
exports.authentication = authentication;

router.use("/status", authentication);
router.post("/status", function(req, res) {
    res.json({
        "userid": req.userid,
        "authorized": req.authenticated == true
    });
});

MongoClient.connect(config.mongodbUrl, function(err, db) {
    console.log("Connected successfully to server");
    var events = db.collection('events');

    function get_events(req, res) {
        var cursor = events.find();
        var result = [];
        cursor.each(function(err, event) {
            if (event != null) {
                let normalized = {
                    title: event.title,
                    date: event.date,
                    content: event.content,
                    id: event._id
                }
                result.push(normalized);
            } else {
                 res.json({events: result});
            }
        });
    };

    router.get("/events", get_events);

    router.use("/event", authentication);
    router.post("/event", function(req, res){
        if (!req.authenticated) {
            res.status(403).json({error: "Not authorized"});
        }
        events.insertOne(req.body.event, function(err, result) {
            if (err === null) {
                get_events(req, res);
            } else {
                get_events(req, res);
            }
            console.log("tried to add",err)
        });
    });

    router.delete("/event", function(req, res){
        if (!req.authenticated) {
            res.status(403).json({error: "Not authorized"});
        }
        events.remove({_id: new mongodb.ObjectID(req.body.event.id)}, function(err, result) {
            if (err === null) {
                get_events(req, res);
            } else {
                get_events(req, res);
            }
            console.log("tried to remove",err)
        });
    });

    router.patch("/event", function(req, res){
        if (!req.authenticated) {
            res.status(403).json({error: "Not authorized"});
        }
        events.updateOne({_id: new mongodb.ObjectID(req.body.event.id)}, req.body.event, function(err, result) {
            if (err === null) {
                get_events(req, res);
            } else {
                get_events(req, res);
            }
            console.log("tried to modify",err)
        });
    });
});


exports.events = function(req, res){
  res.json({
      events: [
          {
              "date": Date.parse("2016-08-30 19:00"),
              "title": "Meet and Greet",
              "id": 1,
              "content": `
              <p>Hey Hackers!</p>
              <p>
                  This will be our first meeting of the semester. Welcome back everyone.
                  We'll mostly just be hanging out and getting to know folks, but I'd
                  also love to talk about what's new this year. Things people want
                  to build and some resources to help people learn to program.
              </p>
              `
          },
          {
              "date": Date.parse("2016-09-06 19:00"),
              "title": "Websites: Doable",
              "id": 2,
              "content": `
              <p>Hey Hackers!</p>
              <p>
                This week we'll be talking about websites. We'll be giving two talks.
                Ben will talk about HTML the basic building block of all sites
                and Isaac will talk about React a popular modern framework for web development
              </p>
              `
          },
          {
              "date": Date.parse("2016-09-13 19:00"),
              "title": "Scripting",
              "id": 3,
              "content": `
              <p>Hey Hackers!</p>
              <p>
                Again this week we will be giving two talks. Ben will give a talk
                on the basics of javascript and programing more generally and Isaac
                will talk about Rust a modern systems programing language.
              </p>
              `
          },
          {
              "date": Date.parse("2016-09-20 19:00"),
              "title": "Git",
              "id": 4,
              "content": `
              <p>Hey Hackers!</p>
              <p>
                If you want to write code, you'll want to learn Git. 
                Git keeps track of all of your changes and makes collaboration with others easy!
                Nick will be showing you basic git commands to get up and running as well as best
                practices when working in teams.
              </p>
              `
          },
          {
              "date": Date.parse("2016-09-27 19:00"),
              "title": "Mini Hackathon",
              "id": 5,
              "content": `
              <p>Hey Hackers!</p>
              <p>
                We all had a lot of fun last semester with a mini-hackathon,
                so we're doing it again. Here's what going to happen. Everyone will
                break up into groups and then your have about an hour to make something
                based on a couple random words we'll give as a prompt.
              </p>
              `
         }
      ]
  });
};

exports.addToMailingList = function(req, res) {
    mailingList.add(req.body.email, function (success) {
        if (!success) {
            mailingList.connect(function (success) {
                mailingList.add(req.body.email, function (success) {
                    console.log("failed again on the second time for", req.body.email);
                });
            });
            console.log("failed to add", req.body.email)
        }
    });
    res.redirect("/");
}

exports.router = router;