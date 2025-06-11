import React, { useState } from 'react';
import '../../assets/style/ToggleVisibility.css';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="toggle-container">
      <button
        className="toggle-button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p className="toggle-text">Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;