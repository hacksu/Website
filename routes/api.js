var fs = require("fs")
var MailingList = require("../email/list");
var config = require("../config")
var request = require('request');
var mongodb =  require('mongodb');
var MongoClient = mongodb.MongoClient


var express = require('express');
var router = express.Router();

var mailingList = new MailingList(config.mailingList.api_key, config.mailingList.list_id, config.mailingList.sender_id)



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
                    id: event._id,
                    sendgrid_id: event.sendgrid_id
                }
                result.push(normalized);
            } else {
                 res.json({events: result});
            }
        });
    };

    router.get("/events", get_events);

    router.use("/event", authentication);  // check requests for login information and set req.authenticated to true if the user has access
    router.post("/event", function(req, res){
        if (!req.authenticated) {
            res.status(403).json({error: "Not authorized"});
        }
        mailingList.scheduleEmail(req.body.event.title, req.body.event.content, req.body.event.date, function(id) {
            req.body.event.sendgrid_id = id;
            console.log(id, req.body.event)
            events.insertOne(req.body.event, function(err, result) {
                if (err === null) {
                    get_events(req, res);
                } else {
                    get_events(req, res); // right now down't provide an error when something goes wrong
                }
            });
        });
    });

    router.delete("/event", function(req, res){
        if (!req.authenticated) {
            res.status(403).json({error: "Not authorized"});
        }
        mailingList.removeEmail(req.body.event.sendgrid_id, function(){});
        events.remove({_id: new mongodb.ObjectID(req.body.event.id)}, function(err, result) {
            if (err === null) {
                get_events(req, res);
            } else {
                get_events(req, res);
            }
        });
    });

    router.patch("/event", function(req, res){
        if (!req.authenticated) {
            res.status(403).json({error: "Not authorized"});
        }
        mailingList.updateEmail(req.body.event.sendgrid_id, req.body.event.title, req.body.event.content, req.body.event.date, function(){});
        events.updateOne({_id: new mongodb.ObjectID(req.body.event.id)}, req.body.event, function(err, result) {
            if (err === null) {
                get_events(req, res);
            } else {
                get_events(req, res);
            }
        });
    });

});


exports.addToMailingList = function(req, res) {
    mailingList.add(req.body.email, function (success) {
        if (!success) {
            console.error("failed to add", req.body.email)
        }
    });
    res.redirect("/");
}
exports.router = router;