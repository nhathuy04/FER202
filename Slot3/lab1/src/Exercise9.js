import React from "react";
import { employees } from "./employeeData";

const Exercise9 = () => {
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <div>
      <h2>Exercise 9</h2>
      <p>Any teenager? {isTeenager.toString()}</p>
    </div>
  );
};

export default Exercise9;
