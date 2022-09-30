const express = require("express");
const User = require("../user/user.model");
const Client = require("./client.model");

const authMiddleware = async (req, res, next) => {
    let id = req.headers.token;
    if(id){
        let user = await User.findById(id);
        if(user){
            req.userID = id;
            next();
        }
        else{
            return res.send("No Clients found")
        }
    }
    else{
        return res.send("Set header token UserID");
    }
}

const app = express.Router();
app.use(authMiddleware);

app.get("/", async (req, res) => {
    try{
        let client = await Client.find({userID: req.userID}).populate({path: "userID",select: "-password"});
        return res.send(client);
    }
    catch(e){
        res.status(500).send(e.message);
    }
})

// Create Client
app.post("/", async (req, res) => {
    try{
        let client = await Client.findOne({ userID: req.userID, name: req.body.name});
        console.log("12");
        if(client){
            return res.send("Client already exists");
        }
        else{
            console.log("In create");
            let cl = await Client.create({
                ...req.body,
                userID: req.userID
            })
            return res.send(cl)
        }

    }catch(e){
        // console.log(11);
        return res.send(e.message);
    }
})

module.exports = app;