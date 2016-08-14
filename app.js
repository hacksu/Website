
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

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


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
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

});

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
      clientID: "172522245692-jcibsu3m69hs8un6ib4hum10voulgs9c.apps.googleusercontent.com",
      clientSecret: "ZyYqONCt3PXF77JoL8dETtHZ",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log( profile.emails[0].value);
      return done(null, {"username": profile.emails[0].value});
    }
));

passport.serializeUser(function(user, done) {
  console.log("serializeUser" + user.username);

  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  console.log("deserializeUser" + username);
  done(null, {"username": username})
});

app.use(passport.initialize());
app.use(passport.session());

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });


app.get('/compose_meeting_details', function(req, res){
  res.send("test " + req.user.username + " " + req.isAuthenticated() );
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/events', api.events);

app.get('/contact', routes.contact);
app.get('/opportunities', routes.opportunities);
app.get('/khe2013', routes.khe2013);
app.get('/khe2014', routes.khe2014);

app.use('/dist', express.static('dist'));


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
