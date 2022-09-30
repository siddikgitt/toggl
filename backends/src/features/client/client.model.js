const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    name: {type: String, required: true}    
});

const Client = mongoose.model("client", clientSchema);

module.exports = Client;