const express = require("express");

const User = require("../user/user.model");
const Team_member = require("../team_member/tm.model");
const Project = require("./project.model");

const authMiddleware = async(req, res, next) => {
    const id = req.headers.token;
    if(id){
        let user = await User.findById(id);
        if(user){
            req.userID = id;
            next();
        }
        else{
            return res.status(401).send("No user Found");
        }
    }
    else{
        return res.status(401).send("Login Required")
    }
}

const app = express.Router();
app.use(authMiddleware);

app.get("/", async (req, res) => {
    try{
        let project = await Project.find({userId: req.userID}).populate("team_memberID", "clientID");
        res.send(project);
    }
    catch(e){
        res.status(500).send(e.message);
    }
})

app.post("/", async (req, res) => {
    try{
        let project = await Project.create({
            ...req.body,
            userId: req.userID
        })
        res.send(project);
    }
    catch(e){
        res.status(500).send(e.message);
    }
})

module.exports = app;