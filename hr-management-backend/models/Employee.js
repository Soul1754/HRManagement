// models/Employee.js

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    position: {
      type: String,
      required: [true, "Please add a position"],
    },
    salary: {
      type: Number,
      required: [true, "Please add a salary"],
    },
    status: {
      type: String,
      enum: ["Active", "On Leave", "Resigned", "Terminated"],
      default: "Active",
    },
    // Add more fields as needed (e.g., skills, documents)
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
