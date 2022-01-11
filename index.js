const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

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
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);


app.listen(process.env.Port || 5000, ()=>{
    console.log("ook")
})