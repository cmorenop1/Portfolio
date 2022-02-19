let mongoose = require('mongoose');


let userSchema = require('../models/users')

mongoose.connect("mongodb+srv://dev:KZ5Q8OsbWo2INeGV@dbportfolio.fhgix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

let db = mongoose.connection;

module.exports = db



// db.on("error", console.error.bind(console, "connection error:"));

// db.once("open", function () {
//     console.log("Connection Successful!");
// });