// controllers/departmentController.js

const Department = require("../models/department");
const asyncHandler = require("express-async-handler");

// @desc    Get all departments
// @route   GET /api/departments
// @access  Private/Admin
exports.getDepartments = asyncHandler(async (req, res, next) => {
  const departments = await Department.find();

  res.status(200).json({
    success: true,
    count: departments.length,
    data: departments,
  });
});

// @desc    Get single department
// @route   GET /api/departments/:id
// @access  Private/Admin
exports.getDepartment = asyncHandler(async (req, res, next) => {
  const department = await Department.findById(req.params.id);

  if (!department) {
    res.status(404);
    throw new Error("Department not found");
  }

  res.status(200).json({
    success: true,
    data: department,
  });
});

// @desc    Create new department
// @route   POST /api/departments
// @access  Private/Admin
exports.createDepartment = asyncHandler(async (req, res, next) => {
  const { name, description } = req.body;

  // Check if department already exists
  const existingDept = await Department.findOne({ name });
  if (existingDept) {
    res.status(400);
    throw new Error("Department already exists");
  }

  const department = await Department.create({
    name,
    description,
  });

  res.status(201).json({
    success: true,
    data: department,
  });
});

// @desc    Update department
// @route   PUT /api/departments/:id
// @access  Private/Admin
exports.updateDepartment = asyncHandler(async (req, res, next) => {
  let department = await Department.findById(req.params.id);

  if (!department) {
    res.status(404);
    throw new Error("Department not found");
  }

  department = await Department.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: department,
  });
});

// @desc    Delete department
// @route   DELETE /api/departments/:id
// @access  Private/Admin
exports.deleteDepartment = asyncHandler(async (req, res, next) => {
  const department = await Department.findById(req.params.id);

  if (!department) {
    res.status(404);
    throw new Error("Department not found");
  }

  await Department.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
    data: {},
  });
});
