import React, { useState } from 'react';
import '../../assets/style/SearchFilter.css';

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Dragon Fruit',
    'Elderberry',
    'Fig',
  ]; // Sample list of items

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="searchfilter-container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="searchfilter-input"
        placeholder="Search items..."
      />
      <ul className="searchfilter-list">
        {filteredItems.length === 0 ? (
          <li className="searchfilter-empty">No items found</li>
        ) : (
          filteredItems.map((item, index) => (
            <li key={index} className="searchfilter-item">
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;