// src/services/employeeService.js

import API from "./api";

export const getEmployees = async () => {
  const response = await API.get("/employees");
  return response.data;
};
