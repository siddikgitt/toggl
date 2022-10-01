const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb+srv://toogl:qwerty123@cluster0.jivh49m.mongodb.net/toggl")
}

module.exports = connect;