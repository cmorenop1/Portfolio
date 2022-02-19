var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');


//mongodb+srv://dev:<password>@dbportfolio.fhgix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect("mongodb://localhost:27017/myDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});





let crypto = require('crypto');


// Create a model class
let UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        //match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
    },
    username: {
        type: String,
        //unique: true,
        //required: 'Username is required',
        trim: true
    },
    password: {
        type: String,
        validate: [(password) => {
            return password && password.length > 0;
        }, 'Password should be longer']
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "user"
});



// let indexController = require('../controllers/index')
//GET METHODS
//router.get('/', indexController.home);
// router.get('/about', indexController.about);
//  router.get('/projects', indexController.projects);
//  router.get('/services', indexController.services);
//  router.get('/contact', indexController.contact);


router.get('/', (req, res) => {

    res.render('home', {
        title: 'Home'
    })

});

router.get('/about', (req, res) => {

    res.render('about', {
        title: 'About'
    })

});

router.get('/projects', (req, res) => {

    res.render('projects', {
        title: 'Projects'
    })

});

router.get('/services', (req, res) => {

    res.render('services', {
        title: 'Services'
    })

});

router.get('/services', (req, res) => {

    res.render('services', {
        title: 'Services'
    })

});

router.get('/contact', (req, res) => {

    res.render('contact', {
        title: 'Contact'
    })

});

router.get('/register', (req, res) => {

    res.render('register.ejs')

});

router.get('/login', (req, res) => {

    res.render('login.ejs')

});



//POST




module.exports = router;