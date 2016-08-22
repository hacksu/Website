

exports.events = function(req, res){
  res.json({
      events: [
          {
              "date": "2012-04-23T18:25:43.511Z",
              "title": "test",
              "content": "<p> This event shall discuss the greatest thing to have ever happened. AKA this api and the amazing things it does. Isn't it great? </p>"
          },
          {
              "date": "2012-04-23T18:25:43.511Z",
              "title": "Really cool demo day",
              "content": "<p> it works </p>"
          }
      ]
  });
};
