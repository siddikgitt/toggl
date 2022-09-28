const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    name: {type: String, required: true}    
});

const Model = mongoose.model("model", modelSchema);

module.exports = Model;