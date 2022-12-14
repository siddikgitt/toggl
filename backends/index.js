const express = require("express");
const dbConnect = require("./src/config/db");
const cors = require("cors");
const clientRouter = require("./src/features/client/client.router");
const userRouter = require("./src/features/user/user.router");
const taskRouter = require("./src/features/task/task.router");
const projectRouter = require("./src/features/project/project.router");
const teamMemberRouter = require("./src/features/team_member/tm.router");
const tagRouter = require("./src/features/tags/tags.router");

const app = express();
app.use(cors())
app.use(express.json());

app.use("/clients", clientRouter);
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);
app.use("/team_members", teamMemberRouter);
app.use("/users", userRouter)
app.use("/tags", tagRouter)


let PORT = 8080
app.listen(PORT, async () => {
    await dbConnect();
    console.log(`Listening to http://localhost:${PORT}`);
} )