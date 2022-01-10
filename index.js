const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const userRoute = require("./routes/user");


dotenv.config()




mongoose.connect(
    process.env.MONGOURL
)
.then(()=> console.log("DBConnection Succesfull!"))
.catch((err)=>{
    console.log(err)
})

app.use(express.json());

app.use("/api/users", userRoute);



app.listen(process.env.Port || 5000, ()=>{
    console.log("ook")
})