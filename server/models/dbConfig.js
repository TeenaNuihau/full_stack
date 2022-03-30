const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://nui:mastermdp@cluster0.pnyqn.mongodb.net/mydatabase",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :", err);
    }
)