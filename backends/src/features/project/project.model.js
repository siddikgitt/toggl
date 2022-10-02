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
    visibility: {type: Boolean, required: true},
    recurring: {type: Boolean, required: true},
    timeEstimate: {type: Number},
    hourlyRate: {type: Number},
    fixedRate: {type: Number},
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;