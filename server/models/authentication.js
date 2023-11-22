const mongoose = require("mongoose");

const authenticationSchema = new mongoose.Schema({
    email:String,
    password:String
})

module.exports = mongoose.model("authentication",authenticationSchema,"authentication")