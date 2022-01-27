const db = require("../models");
//const bcrypt = require("bcrypt");

//Define methods for the userController
module.exports = {
    findAll: function(req, res){
        db.User.find(req.query)
        .sort({name: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // findByEmail: function(req, res){
    //     db.User.find({email:req.body.email})
    // },
};