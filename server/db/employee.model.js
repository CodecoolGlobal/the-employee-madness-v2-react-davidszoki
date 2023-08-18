// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const EquipmentSchema = new Schema({
  name: String,
  type: String,
  amount: Number
});

const Equipment = mongoose.model("Equipment", EquipmentSchema);


const EmployeeSchema = new Schema({
  name: String,
  level: String,
  position: String,
  created: {
    type: Date,
    default: Date.now,
  },
  equipment: [{type: mongoose.Schema.Types.ObjectId, ref: Equipment}]
});

module.exports = mongoose.model("Employee", EmployeeSchema);
