// https://mongoosejs.com/
const mongoose = require("mongoose");
// const brand = require("./brand.model")
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  level: String,
  position: String,
  created: {
    type: Date,
    default: Date.now,
  },
  yearsOfEx: Number,
  brand:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand"
  }
});

module.exports = mongoose.model("Employee", EmployeeSchema);  
