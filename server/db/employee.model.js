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
  // Own parctice from PA practices #2
  startDate: Date, 
  currentSalary: Number,
  favouriteColor: String,
  desiredSalary: Number,
  
  // PA
  yearsOfEx: Number, 
  
  // Own practice for journey
  // brand:{ 
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "brand"
  // }
});

module.exports = mongoose.model("Employee", EmployeeSchema);  
