let User = require('../models/user');
let passport = require('passport');

module.exports.renderSignin = function (req, res, next) {

  //DEBUG  
  if (!req.user) {
    console.debug('dentro del if')

    res.render('auth/login', {
      title: 'Login Form',
      //messages: req.flash('error') || req.flash('info')
    });


  } else {
    // console.log(req.user);
    // return res.redirect('/');
    console.debug('dentro del else')
  }
};

function getErrorMessage(err) {
  console.log("===> Error: " + err);
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

    console.log(user);

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



function test(res) {
  return res.send('this works')
}