var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('this works');
});


//sign-up (register)

/**
 * SIGN-UP
 * → GET
 * → POST
 */
router.get('/signup', userController.renderSignUp);
router.post('/signup', userController.signup);

/**
 * SIGN-IN
 * → GET
 * → POST
 */
router.post('/signin', userController.renderSignin);















// Sign-in (login)
router.get('/signin', userController.renderSignin);
//router.post('/signin', userController.signin);






module.exports = router;