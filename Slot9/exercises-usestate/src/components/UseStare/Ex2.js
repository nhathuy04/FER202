import { useState } from 'react';
import '../../assets/style/Example2.css';

function Example2() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);

  return (
    <div className="example2-container">
      <div className="example2-section">
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); console.log(e.target.value); }}
          className="example2-input"
          placeholder="Enter name"
        />
        <p className="example2-text">My name is {name}</p>
      </div>
      <div className="example2-section">
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
          className="example2-input"
          placeholder="Enter age"
        />
        <p className="example2-text">My age is {age}</p>
      </div>
    </div>
  );
}

export default Example2;