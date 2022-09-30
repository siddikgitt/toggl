const express = require("express");

const User = require("./user.model");

const app = express.Router();

app.get("/", async(req, res) => {
  let users = await User.find();
  res.send(users);  
});

app.post("/login", async (req, res) => {
  let {email, password} = req.body;
  try{
    let user = await User.findOne({email, password});
    if(!user){
      return res.status(401).send("Invalid Credential");
    }
    return res.send({
      token: user.id
    })
   }
  catch(err){
    return res.status(500).send(err.message);
  }
})

app.post("/signup", async (req, res) => {
  let {name, email, password} = req.body;
  try{
      let user = await User.findOne({name, email, password});
      if(user){
        return res.status(404).send("User already exists");
      }
      let newUser = await User.create(req.body);
      res.send({
        token: `${newUser.id}`
      })
  }
  catch(err){
    return res.status(500).send(err.message);
  }
})

module.exports = app;