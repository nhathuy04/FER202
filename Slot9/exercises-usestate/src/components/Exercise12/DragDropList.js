import React, { useState } from 'react';
import '../../assets/style/DragDropList.css';
function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4','Item 5']); // Initial list of items
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggingItem(index);
    e.target.classList.add('dragging');
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove('dragging');
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggingItem === null) return;

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggingItem, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div className="dragdrop-container">
      <h3 className="dragdrop-title">Drag and Drop List</h3>
      <ul className="dragdrop-list">
        {items.map((item, index) => (
          <li
            key={item}
            className="dragdrop-item"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;