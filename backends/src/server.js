const express = require("express");
const dbConnect = require("./config/db");
const cors = require("cors")
const clientRouter = require("./features/client/client.router");
const userRouter = require("./features/user/user.router");
const taskRouter = require("./features/task/task.router");
const projectRouter = require("./features/project/project.router");
const teamMemberRouter = require("./features/team_member/tm.router");

const app = express();
app.use(cors())
app.use(express.json());

app.use("/clients", clientRouter);
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);
app.use("/team_members", teamMemberRouter);
app.use("/users", userRouter)


let PORT = 8080
app.listen(PORT, async () => {
    await dbConnect();
    console.log(`Listening to http://localhost:${PORT}`);
} )