
/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser')
var morgan = require('morgan')
var errorhandler = require('errorhandler')

var api = require('./routes/api');
var routes = require('./routes');

var http = require('http');
var path = require('path');

var app = express();



app.set('port', process.env.PORT || 3000);
app.use('/favicon.ico', express.static('public/images/favicon.ico'));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));



// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

app.get('/api/events', api.events);
app.use('/api', api.router);
app.post('/api/mailinglist', api.addToMailingList)
app.get('/*', routes.react);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
