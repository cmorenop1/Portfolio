var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

/* GET about */
router.get('/about', indexController.about);

/* GET project page. */
router.get('/projects', indexController.projects);

/* GET services page. */
router.get('/services', indexController.services);

/* GET contact page. */
router.get('/contact', indexController.contact);

/* GET contact page. */
router.get('/login', indexController.login);

/* GET contact page. */
router.get('/business', indexController.business);

module.exports = router;