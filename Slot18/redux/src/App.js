import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>Ứng dụng Giỏ Hàng</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;