const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project",
        required: true,
    },
    taskName: {
        type: String,
        required: true
    },
    taskDate: {type: String, required: true},
    startTime: {type: Number},
    endTime: {type: Number},
    counterTime: {type: String},
    seconds: {type: Number}
});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;