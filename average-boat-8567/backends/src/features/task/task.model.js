const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;