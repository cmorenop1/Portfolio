let User = require('../models/user');
let passport = require('passport');

module.exports.renderSignin = function (req, res, next) {

  if (!req.user) {
    res.render('auth/signin', {
      title: 'Sign-in Form',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    console.log(req.user);
    return res.redirect('/');
  }
};

module.exports.renderBusiness = function (req, res, next) {
  if (req.user) {
    res.render('business', {
      title: 'Business',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    return res.redirect('/');
  }
};

module.exports.signin = function (req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/users/business',
    failureRedirect: '/users/signin',
    failureFlash: true
  })(req, res, next);
  delete req.session.url;
}


function getErrorMessage(err) {
  console.log("===> Error: " + err);
  console.error(` ERROR: ${err}`);
  let message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};


module.exports.renderSignUp = function (req, res, next) {

  console.log('.:: RENDERING FORM - WAITING FOR SUBMIT ACTION ::.')

  //if I don't have the user → it is not authenticated
  if (!req.user) {

    //as we don't have an user, we proceed to create one
    let newUser = User()

    //console.log(`user is: ${newUser}`)

    res.render('auth/signup', {
      title: 'Sign up form',
      messages: req.flash('error'),
      user: newUser
    })

  } else {
    return res.redirect('/')
  }
}


module.exports.signup = function (req, res, next) {

  if (!req.user) {
    console.log(req.body);

    let user = new User(req.body);

    user.save((err) => {
      if (err) {
        let message = getErrorMessage(err);
        req.flash('error', message);
        // return res.redirect('/users/signup');
        return res.render('auth/signup', {
          title: 'Sign-up Form',
          messages: req.flash('error'),
          user: user
        });
      }

      req.login(user, (err) => {
        console.log(user)
        if (err) return next(err);
      });

    });
    return res.redirect(301, '/')

  } else {
    return res.redirect('/');
  }

};

module.exports.signout = function (req, res, next) {
  req.logout();
  res.redirect('/');
};