const passport = require('passport')


module.exports = function(){
    const User = require('../models/user')

    passport.serializeUser((user, done)=>{
        done(null, user.id)
    })

    passport.deserializeUser(()=>{
        User.findOne({_id: id}, '-password -salt', (err, user)=>{
            done(err,user)
        })
    })
    
    //IIFE → auto excecuted formula → passing as an argument → './local.js'
    require('./local')()
}