const express = require("express");
const User = require("../user/user.model");
const Tag = require("./tags.model");

const authMiddleware = async (req, res, next) => {
    let id = req.headers.token;
    if(id){
        let user = await User.findById(id);
        if(user){
            req.userID = id;
            next();
        }
        else{
            return res.send("No Tag found")
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
        let client = await Tag.find({userID: req.userID}).populate({path: "userID",select: "-password"});
        return res.send(client);
    }
    catch(e){
        res.status(500).send(e.message);
    }
})

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    try{
        let client = await Tag.findByIdAndDelete({_id:id})
        return res.status(200).send({message:"Tag deleted successfully"})
    }
    catch(e){
        res.status(500).send(e.message);
    }
})

// Create Client
app.post("/", async (req, res) => {
    try{
        let client = await Tag.findOne({ userID: req.userID, name: req.body.name});
        if(client){
            return res.send("Tag already exists");
        }
        else{
            let cl = await Tag.create({
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