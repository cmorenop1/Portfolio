//db mongo setup
let mongoose = require('mongoose');
let db = require('../config/db')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

//console.log(db.connection.uri)
mongoose.connect(db.connection.uri,(err,res)=>{
  if(err) console.error(err)
  if(res) console.log('🍁 connected to Atlas')
})