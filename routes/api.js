var fs = require("fs")
var MailingList = require("../email/list");
var config = require("../config")
var mailingList = new MailingList(config.mailingList.url, config.mailingList.list, config.mailingList.password, false)
mailingList.connect(function (success) {
    if (success) {
        console.log("Connected to MailingList");
    } else {
        console.log("failed to login");
    }
})

exports.events = function(req, res){
  res.json({
      events: [
          {
              "date": Date.parse("2016-08-30 19:00"),
              "title": "Meet and Greet",
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
              "title": "Style's Important",
              "content": `
              <p>Hey Hackers!</p>
              <p>
                This week we'll be talking about how to make that website your
                dreaming about look great. Ben will lead a talk on the basics of CSS
                and Isaac will talk about more advanced things that can be done with CSS.
              </p>
              `
          },
          {
              "date": Date.parse("2016-09-27 19:00"),
              "title": "Mini Hackathon",
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
            mailingList.connect();
            console.log("failed to add", req.body.email)
        }
    });
    res.redirect("/");
}
