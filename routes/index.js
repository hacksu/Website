 var express = require('express');
var path = require('path');

/*
 * GET home page.
 */

exports.react = function(req, res){
  res.sendFile(path.join(__dirname +"/../views/react-base.html"));
};