const express = require("express");

const Team_member = require("./tm.model");

const app = express.Router();

app.get("/", (req, res) => {
  let team_members = new Team_member.find().limit();
  res.send(team_members);  
});

module.exports = app;