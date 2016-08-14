

exports.events = function(req, res){
  res.json({
      events: [
          {
              "date": "2012-04-23T18:25:43.511Z",
              "title": "test",
              "content": "<p> it works </p>"
          },
          {
              "date": "2012-04-23T18:25:43.511Z",
              "title": "Really cool demo day",
              "content": "<p> it works </p>"
          }
      ]
  });
};
