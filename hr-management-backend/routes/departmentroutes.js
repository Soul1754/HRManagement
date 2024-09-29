// routes/departmentRoutes.js

const express = require("express");
const {
  getDepartments,
  getDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(protect, authorize("Admin"), getDepartments)
  .post(protect, authorize("Admin"), createDepartment);

router
  .route("/:id")
  .get(protect, authorize("Admin"), getDepartment)
  .put(protect, authorize("Admin"), updateDepartment)
  .delete(protect, authorize("Admin"), deleteDepartment);

module.exports = router;
