let mongoose = require('mongoose')

const userSchema = mongoose.Schema({
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

module.exports = userSchema