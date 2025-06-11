import React, { useState } from 'react';
import '../../assets/style/Counting.css';


function Counter() {
  const [count, setCount] = useState(6); 

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p className="counter-text">Count: {count}</p>
    </div>
  );
}

export default Counter;