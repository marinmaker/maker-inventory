const db = require("../models");

//Define methods for kitController
module.exports = {
    findAll: function(req, res){
        db.Kit.find(req.query)
            .sort({title})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res){
        db.Kit.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Kit.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Kit.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Kit.findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};  