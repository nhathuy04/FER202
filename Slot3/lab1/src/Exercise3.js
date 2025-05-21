import React from "react";
import { employees } from "./employeeData";

const Exercise3 = () => (
  <div>
    <h2>Exercise 3</h2>
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={emp.id || index}>
            <td>{emp.id || index}</td>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Exercise3;
