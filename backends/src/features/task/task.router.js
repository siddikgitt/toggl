const express = require("express");

const User = require("../user/user.model");
const Project = require("../project/project.model");
const Task = require("./task.model");

const authMiddleware = async (req, res, next) => {
    let id = req.headers.token;
    if(id){
      let user = await User.findById(id);
      if(user){
        req.userID = id
        next();
      }
      else{
        return res.status(401).send("Not a valid userID");
      }
    }
    else{
      return res.status(401).send("Not a  userID");
    }
  }

const app = express.Router();
app.use(authMiddleware);

app.get("/:id", async (req, res) => {
    const id = req.params.id;
    try{
        let task = await Task.find({userID: req.userID, projectID: id});
        res.send(task);
        
    }
    catch(e){
        res.status(500).send(e.message);
    }
})

app.get("/", async (req, res) => {
  try{
    let task = await Task.find({userID: req.userID}).populate("projectID");
    res.send(task);
  }
  catch(e){
    res.status(500).send(e.message);
  }
})

app.post("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let task = await Task.create({
            ...req.body,
            userID: req.userID,
            projectID: id
        })
        res.send(task);
    } catch (e) {
        res.status(500).send(e.message);
    }
})

module.exports = app;