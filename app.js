
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var api = require('./routes/api');

var http = require('http');
var path = require('path');

var app = express();



app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use('/favicon.ico', express.static('public/images/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

});


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/api/events', api.events);
app.post('/api/mailinglist', api.addToMailingList)

app.get('/contact', routes.contact);
app.get('/opportunities', routes.opportunities);
app.get('/khe2013', routes.khe2013);
app.get('/khe2014', routes.khe2014);
app.get('/calender', routes.calender)


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
