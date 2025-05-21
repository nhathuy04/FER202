import React from "react";
import { employees } from "./employeeData";

const Exercise6 = () => (
  <div>
    <h2>Exercise 6</h2>
    <ul>
      {employees.filter(e => e.department === "IT").map((emp, index) => (
        <li key={emp.id || index}>{emp.name}</li>
      ))}
    </ul>
  </div>
);

export default Exercise6;
