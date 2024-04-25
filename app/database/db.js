
const mongoose = require('mongoose');
require('dotenv').config()
exports.connectMonggose =()=>{
    mongoose.connect(process.env.MONGODB_URL,
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb =>> Nodejs Authentication"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
