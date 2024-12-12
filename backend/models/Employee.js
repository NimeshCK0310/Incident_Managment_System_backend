const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  nic: { type: String, required: true },
  address: { type: String, required: true }, // Corrected typo
});

module.exports = mongoose.model("Employee", EmployeeSchema);
