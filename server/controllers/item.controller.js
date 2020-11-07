console.log("item.controller.js");

const Item = require("../models/item.model");

class ItemController {
    create(req, res) {
        const newItem = new Item(req.body);
        if(!newItem.isRecyclable) {
            newItem.isRecyclable = false;
        }
        newItem.save()
            .then( () => res.json(newItem) )
            .catch( errors => res.json(errors) );
    }
    getAll(req,res) {
        Item.find()
            .then( item => res.json(item) )
            .catch( errors => res.json(errors) );
    }
    // get one
    getOne(req, res) {
        Item.findOne( {_id: req.params._id} )
            .then( anItem => res.json(anItem) )
            .catch( errors => res.json(errors) );
    }
    // update
    update(req, res) {
        Item.findByIdAndUpdate( {_id: req.params._id}, req.body, {runValidators: true} )
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
    // remove
    remove(req, res) {
        Item.findByIdAndRemove( {_id: req.params._id} )
        .then( () => res.json({msg: "ok"}) )
        .catch( errors => res.json(errors) );
    }
}

module.exports = new ItemController();