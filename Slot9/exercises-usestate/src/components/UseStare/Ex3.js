import React, { useState } from 'react';
import '../../assets/style/ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  return (
    <div className="productlist-container">
      {products.map(product => (
        <div key={product.id} className="productlist-item">
          <input
            type="checkbox"
            id={product.id}
            value={product.id}
            checked={selectedProducts.includes(product.id)}
            onChange={handleCheckboxChange}
            className="productlist-checkbox"
          />
          <label htmlFor={product.id} className="productlist-label">
            {product.name}
          </label>
        </div>
      ))}

      {selectedProducts.length > 0 && (
        <p className="productlist-selected">
          Bạn đã chọn các sản phẩm: {selectedProducts.map(id => products.find(p => p.id === id).name).join(', ')}
        </p>
      )}
    </div>
  );
}

export default ProductList;