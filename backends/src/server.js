const express = require("express");
const dbConnect = require("./config/db");

const userRouter = require("./features/user/user.router");
const taskRouter = require("./features/task/task.router");
const projectRouter = require("./features/project/project.router");
const teamMemberRouter = require("./features/team_member/tm.router");

const app = express();
app.use(express.json());


app.use("/users", userRouter)
app.use("/team_members", teamMemberRouter);
app.use("/tasks", taskRouter);
app.use("/projects", projectRouter);


let PORT = 8080
app.listen(PORT, async() => {
    await dbConnect();
    console.log(`Listening to http://localhost:${PORT}`);
} )