var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET about */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET project page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
