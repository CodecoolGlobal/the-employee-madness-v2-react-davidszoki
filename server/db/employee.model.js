// https://mongoosejs.com/
const mongoose = require("mongoose");
const favBrand = require("./brand.model").schema
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  level: String,
  position: String,
  created: {
    type: Date,
    default: Date.now,
  },
  brand:favBrand
});

module.exports = mongoose.model("Employee", EmployeeSchema);
