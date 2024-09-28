import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages//Login";
// import EmployeeManagement from "./components/EmployeeManagement";
// import AttendanceManagement from "./components/AttendanceManagement";
// import PayrollManagement from "./components/PayrollManagement";
// import PerformanceManagement from "./components/PerformanceManagement";
// import RecruitmentManagement from "./components/RecruitmentManagement";
// import TrainingManagement from "./components/TrainingManagement";
// import Reports from "./components/Reports";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
   
      <Routes>
      
        <Route path="/login" element={<Login />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;

