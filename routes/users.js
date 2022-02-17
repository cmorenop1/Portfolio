var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this works');
});


//sign-up (register)


//this have to return something → [res.redirect]
router.get('/signup', userController.renderSignUp);


//this have to return something → [res.redirect]
router.post('/signup', userController.signup);





//router.post('/signup', userController.signup);

 










// Sign-in (login)
router.get('/signin', userController.renderSignin);
//router.post('/signin', userController.signin);






module.exports = router;
