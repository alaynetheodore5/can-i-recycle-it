console.log("item.model.js");

const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Pet name is required!"],
        minlength: [3, "Name must be 3 characters or longer"]
    },
    isRecyclable: {
        type: Boolean
    },
    instructions: {
        type: String,
        required: [true, "Pet description is required!"],
        minlength: [3, "Description must be 3 characters or longer"]
    }
}, {timestamps: true});

module.exports = mongoose.model("Item", ItemSchema);