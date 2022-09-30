const mongoose = require("mongoose");

const team_memberSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    managerID: {type: String, required: true},
    organization: {type: String},
    workspace: {type: String},
    groups: {type: String },
});

const Team_member = mongoose.model("team_member", team_memberSchema);

module.exports = Team_member;