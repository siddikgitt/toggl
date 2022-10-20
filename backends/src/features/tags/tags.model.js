const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    name: {type: String, required: true}    
});

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;