const express = require("express");


const mongoose = require("mongoose");
const cors = require("cors")

const authenticationRoutes = require("./routes/authentication")

const app = express();
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/user")



app.use("/authentication",authenticationRoutes)


app.listen(8000,()=>{
    console.log("server is runnning")
})