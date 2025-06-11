import React, { useState } from 'react';
import '../../assets/style/ProductSelector.css';

function ProductSelector() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRadioChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    setSelectedProduct(productId);
  };

  return (
    <div className="productselector-container">
      <h3 className="productselector-title">Chọn một sản phẩm:</h3>
      {products.map((product) => (
        <div key={product.id} className="productselector-item">
          <input
            type="radio"
            id={`product-${product.id}`}
            name="product"
            value={product.id}
            checked={selectedProduct === product.id}
            onChange={handleRadioChange}
            className="productselector-radio"
          />
          <label htmlFor={`product-${product.id}`} className="productselector-label">
            {product.name}
          </label>
        </div>
      ))}

      {selectedProduct && (
        <p className="productselector-selected">
          Bạn đã chọn: {products.find(p => p.id === selectedProduct).name}
        </p>
      )}
    </div>
  );
}

export default ProductSelector;