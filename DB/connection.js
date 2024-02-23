const mongoose = require('mongoose')
const connectionString = process.env.connectionString

mongoose.connect(connectionString).then(
    ()=>{
        console.log("MongoDB Atlas Connected with SwapServer");
    }
).catch((err)=>{
    console.log("MongoDB connection failed!!!",err);
})