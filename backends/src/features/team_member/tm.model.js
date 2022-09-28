const mongoose = require("mongoose");

const team_memberSchema = new mongoose.Schema({

});

const Team_member = mongoose.model("team_member", team_memberSchema);

module.exports = Team_member;