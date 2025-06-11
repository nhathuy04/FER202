import React, { useState } from 'react';
import '../../assets/style/TextInput.css';

function TextInput() {
  const [text, setText] = useState('abc'); 

  return (
    <div className="textinput-container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textinput-input"
        placeholder="Type something..."
      />
      <p className="textinput-display">Input text: {text}</p>
    </div>
  );
}

export default TextInput;