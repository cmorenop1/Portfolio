var express = require('express');
var router = express.Router();

let crypto = require('crypto');


// var schema =  userSchema
// let collectionName = "myCollection"
// var MongoModel = mongoose.model("model", schema, collectionName)

// var newMongoDocument = new MongoModel({
//     name: "John",
//     age: 21
// });

// newMongoDocument.save(function (err, doc) {
//     if (err) return console.error(err);
//     console.log(`Document inserted succussfully into ${collectionName}!`);
// })
 


// let indexController = require('../controllers/index')
//router.get('/', indexController.home);
// router.get('/about', indexController.about);
//  router.get('/projects', indexController.projects);
//  router.get('/services', indexController.services);
//  router.get('/contact', indexController.contact);


//GET METHODS
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