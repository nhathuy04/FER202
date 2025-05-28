import React from "react";
import { employees } from "./employeeData";

const Exercise2 = () => (
  <div>
    <h2>Exercise 2</h2>
    <ul>
      {employees.map((emp, index) => (
        <li key={emp.id || index}> {emp.name} - {emp.department}</li>
      ))}
    </ul>
  </div>
);

export default Exercise2;