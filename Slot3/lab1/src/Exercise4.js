import React from "react";
import { employees } from "./employeeData";

const averageAge = (...ages) => (
    ages.reduce((sum, age) => sum + age, 0) / ages.length).toFixed(2);

const Exercise4 = () => {
  const ages = employees.map(e => e.age);
  return (
    <div>
      <h2>Exercise 4</h2>
      <p>Average Age: {averageAge(...ages)}</p>
    </div>
  );
};

export default Exercise4;
