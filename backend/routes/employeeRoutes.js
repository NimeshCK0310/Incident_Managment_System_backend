// routes/employeeRoutes.js
const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employees", error });
  }
});

// Get employee by ID
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employee", error });
  }
});

router.post("/", async (req, res) => {
    try {
      const { name, email, phone, department, nic, address } = req.body;
  
      if (!name || !email || !phone || !department || !nic || !address) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newEmployee = new Employee({ name, email, phone, department, nic, address });
      await newEmployee.save();
      res.status(201).json({ message: "Employee added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  });

// Update employee
router.put("/:id", async (req, res) => {
  try {
    const { name, email, phone, department } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, department },
      { new: true }
    );
    if (!updatedEmployee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error updating employee", error });
  }
});

// Delete employee
router.delete("/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting employee", error });
  }
});

module.exports = router;
