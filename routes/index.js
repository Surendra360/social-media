var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/all', function(req, res, next) {
  res.render('all');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
