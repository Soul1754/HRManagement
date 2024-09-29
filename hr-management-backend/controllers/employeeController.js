// controllers/employeeController.js

const Employee = require("../models/Employee");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @desc    Get all employees
// @route   GET /api/employees
// @access  Private/Admin
exports.getEmployees = asyncHandler(async (req, res, next) => {
  const employees = await Employee.find().populate(
    "user",
    "firstName lastName email role"
  );

  res.status(200).json({
    success: true,
    count: employees.length,
    data: employees,
  });
});

// @desc    Get single employee
// @route   GET /api/employees/:id
// @access  Private/Admin
exports.getEmployee = asyncHandler(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id).populate(
    "user",
    "firstName lastName email role"
  );

  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }

  res.status(200).json({
    success: true,
    data: employee,
  });
});

// @desc    Create new employee
// @route   POST /api/employees
// @access  Private/Admin
exports.createEmployee = asyncHandler(async (req, res, next) => {
  const { userId, position, salary, status } = req.body;

  // Check if user exists
const user = await User.findById(userId);
if (!user) {
    res.status(400);
    throw new Error("User already exists");
}

  // Create employee
  const employee = await Employee.create({
    user: userId,
    position,
    salary,
    status,
  });

  res.status(201).json({
    success: true,
    data: employee,
  });
});

// @desc    Update employee
// @route   PUT /api/employees/:id
// @access  Private/Admin
exports.updateEmployee = asyncHandler(async (req, res, next) => {
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }

  employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: employee,
  });
});

// @desc    Delete employee
// @route   DELETE /api/employees/:id
// @access  Private/Admin
exports.deleteEmployee = asyncHandler(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }

  await employee.deleteOne();

  res.status(200).json({
    success: true,
    data: {},
  });
});
