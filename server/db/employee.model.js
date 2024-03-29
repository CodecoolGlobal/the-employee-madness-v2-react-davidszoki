// https://mongoosejs.com/
const mongoose = require("mongoose");
// const brand = require("./brand.model")
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  level: String,
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Position"
  },

  
  created: {
    type: Date,
    default: Date.now,
  },
  // Own parctice from PA practices #2
  startDate: Date,
  currentSalary: Number,
  favouriteColor: String,
  desiredSalary: Number,

  // Own parctice from PA practices #6
  kittens:[
    {
      name: String,
      weight: Number
    }
  ],

  // PA
  yearsOfEx: Number,

  // Own practice for journey
  // brand:{ 
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "brand"
  // }
});

module.exports = mongoose.model("Employee", EmployeeSchema);  
