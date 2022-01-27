var  mongoose = require("mongoose");
//var bcrypt = require("bcrypt");

var Schema =  mongoose.Schema;
var UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    kits: [{}]
});

// bcrypt code for password goes here

var User = mongoose.model("User", UserSchema);

module.exports = User;