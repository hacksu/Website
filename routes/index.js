
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hacksu' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact Hacksu' });
};

exports.opportunities = function(req, res){
  res.render('opportunities', { title: 'Hacksu Opportunities' });
};

exports.khe2013 = function(req, res){
  res.render('khe2013', { title: 'Kent Hack Enough 2013' });
};

exports.khe2014 = function(req, res){
  res.render('khe2014', { title: 'Kent Hack Enough 2014' });
};

exports.calender = function(req, res){
  res.render('upcoming', { title: 'Up Coming HacKSU Meetings' });
};
