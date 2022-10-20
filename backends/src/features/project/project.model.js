const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client",
        required: true
    },
    team_memberID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "team_member",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    name: {type: String, required: true},
    visibility: {type: Boolean},
    recurring: {type: Boolean},
    timeEstimate: {type: Number, required: true},
    hourlyRate: {type: Number},
    fixedRate: {type: Number, required: true},
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;