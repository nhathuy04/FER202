import React, { useState } from 'react';
import '../../assets/style/ColorSwitcher.css';

function ColorSwitcher() {
  const [selectedColor, setSelectedColor] = useState(''); 
  const [isVisible, setIsVisible] = useState(false);

  const colors = ['Red', 'Blue', 'Green', 'Yellow'];

  const handleChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    setIsVisible(!!color); 
  };

  return (
    <div className="colorswitcher-container">
      <select
        value={selectedColor}
        onChange={handleChange}
        className="colorswitcher-dropdown"
      >
        <option value="" disabled>
          Select a color
        </option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      {isVisible && (
        <div
          className="colorswitcher-box"
          style={{ backgroundColor: selectedColor.toLowerCase() }}
        ></div>
      )}
    </div>
  );
}

export default ColorSwitcher;