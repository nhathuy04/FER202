import React from "react";
import { employees } from "./employeeData";

const Exercise8 = () => {
  const groupedEmployees = employees.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] || [];
    acc[emp.department].push(emp);
    return acc;
  }, {});

  return (
    <div>
      <h2>Exercise 8</h2>
      {Object.keys(groupedEmployees).map(dept => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {groupedEmployees[dept].map(emp => (
              <li key={emp.id || emp.name + "-" + emp.department}>
                {emp.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise8;