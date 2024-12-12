const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Department", departmentSchema);
