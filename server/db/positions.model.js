const mongoose = require("mongoose");
// const brand = require("./brand.model")
const { Schema } = mongoose;

const PositionShcema = new Schema({
    name:String,
    salary:Number
});

module.exports = mongoose.model("Position", PositionShcema)