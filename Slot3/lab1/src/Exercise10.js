import React, { useState } from "react";
import { employees } from "./employeeData";

const Exercise10 = () => {
  const [query, setQuery] = useState("");

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Exercise 10</h2>
      <input
        type="text"
        placeholder="Search employee"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map(emp => (
          <li key={emp.id || `${emp.name}-${emp.department}`}>
            {emp.name} - {emp.department} - {emp.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise10;