import React from "react";
import { employees } from "./employeeData";

const Exercise5 = () => (
  <div>
    <h2>Exercise 5</h2>
    <select>
      {employees.map((emp, index) => (
        <option key={emp.id || index}>{emp.name}</option>
      ))}
    </select>
  </div>
);

export default Exercise5;
