const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = new Schema({
  id: Number,
  name: String,
  phone: String,
  password: String,
  email: String,
});

const Manager = mongoose.model("Manager", managerSchema);

module.exports = Manager;
