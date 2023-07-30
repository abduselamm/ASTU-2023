import mongoose from "mongoose";

// Student schema
const studentSchema = new mongoose.Schema({
  name: String,
  quote: String,
  photos: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
});

// Department sche ma
const departmentSchema = new mongoose.Schema({
  name: String,
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
  },
});

// School schema
const schoolSchema = new mongoose.Schema({
  name: String,
});

// Models
export const Student = mongoose.model("Student", studentSchema);
export const Department = mongoose.model("Department", departmentSchema);
export const School = mongoose.model("School", schoolSchema);
export default Student;
