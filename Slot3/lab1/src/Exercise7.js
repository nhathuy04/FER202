import React from "react";
import { employees } from "./employeeData";

const Exercise7 = () => {
  const sorted = [...employees].sort((a, b) =>
    a.department.localeCompare(b.department) ||
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <h2>Exercise 7</h2>
      <ul>
        {sorted.map((emp, index) => (
          <li key={emp.id || index}>{emp.name} - {emp.department} - {emp.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise7;
