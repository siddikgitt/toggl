const express = require("express");

const Team_member = require("./tm.model");
const User = require("../user/user.model");

const authMiddleware = async (req, res, next) => {
  let id = req.headers.token;
  if(id){
    let user = await User.findById(id);
    if(user){
      req.userID = id;
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

app.get("/", async (req, res) => {
  try{
    let team_members = await Team_member.find({managerID: req.userID}).populate({path:"userID",select:'-password'});
    return res.send(team_members);  
  }
  catch(e){
    return res.status(500).send(e.message)
  }
});

app.post("/", async(req, res) => {
  try{
    let existingMember = await Team_member.findOne({
      managerID: req.userID,
      userID: req.body.userID
    })
    if(existingMember){
      return res.send("Member already in Team");
    }
    else{
      let tm = await Team_member.create({
        ...req.body,
        managerID: req.userID
      });
      return res.send(tm);
    }
  }
  catch(e){
    return res.status(500).send(e.message)
  }
})

module.exports = app;