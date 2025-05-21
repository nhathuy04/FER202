import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
     <h1>Hello World</h1>
     <p>Clicked {count}</p>
     <button onClick={() => setCount(count+1)}>Click In Here</button>
     <button onClick={() => setCount(0)}>Reset</button>
    </div>
   
   
  );
}

export default App;
