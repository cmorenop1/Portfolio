//this file will use → local strategy module

const passport = require("passport");

const localStrategy = require('passport-local').Strategy
const User = require('../models/user')

//function authLocal

module.exports = function () {

    console.log('\n.:: using local-strategy function ::.\n')

    passport.use(new localStrategy((username, password, done) => {

        console.log('\n.:: using authLocal function ::.\n')

        User.findOne({
            username: username
        }, (error, user) => {

            //if some error → error
            if (error) {
                return done(error)
            }
            
            //if user does not exist → invalid user
            if (!user) {
                return done(null, false, {
                    message: 'unknown user'
                })
            }
            
            //if it is not authenticated → auth error
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'invalid password'
                })
            }
            
            
            //if everything is good → happy path → done
            return done(null, user)


        })
    }))

}