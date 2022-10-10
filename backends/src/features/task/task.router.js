const express = require("express");

const User = require("../user/user.model");
const Project = require("../project/project.model");
const Task = require("./task.model");

const authMiddleware = async (req, res, next) => {
  let id = req.headers.token;
  if (id) {
    let user = await User.findById(id);
    if (user) {
      req.userID = id;
      next();
    } else {
      return res.status(401).send("Not a valid userID");
    }
  } else {
    return res.status(401).send("Not a  userID");
  }
};

const app = express.Router();
app.use(authMiddleware);

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let task = await Task.find({ userID: req.userID, projectID: id }).populate("projectID");
    res.send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/", async (req, res) => {
  try {
    let task = await Task.find({ userID: req.userID }).populate("projectID");
    res.send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/:id", async (req, res) => {
  const id = req.params.id;
  let ts = Date.now();

  let date_ob = new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth();
  let year = date_ob.getFullYear();

  let todayDate = (date + "-" + month + "-" + year);

  try {
    let task = await Task.create({
      ...req.body,
      userID: req.userID,
      projectID: id,
      taskDate: todayDate,
      counterTime: "0hr:0min:0sec",
    });
    res.send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.patch("/:id", async(req, res) => {
  let id = req.params.id;
  let counterUpdate = req.body;
  console.log(id, counterUpdate);
  try{
    let task = await Task.findByIdAndUpdate(id, counterUpdate)
    res.send(task);
  }
  catch(e){
    res.status(500).send(e.message);
  }
})

module.exports = app;
