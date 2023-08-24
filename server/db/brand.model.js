const mongoose = require("mongoose");

const { Schema } = mongoose;

const BrandSchema = new Schema({
  name:String
});

module.exports = mongoose.model("brand", BrandSchema); //referencia a string elem hivatkozásnál más modellbe