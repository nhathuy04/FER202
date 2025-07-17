import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    products: [
      {
        id: 1,
        name: 'Sản phẩm mẫu',
        price: 9.99,
        description: 'Đây là một sản phẩm mẫu.',
        catalogs: ['danh mục 1', 'danh mục 2'],
      },
    ],
    nextId: 2,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addProduct: (state, action) => {
      const newProduct = { ...action.payload, id: state.nextId };
      state.products.push(newProduct);
      state.nextId += 1;
    },
  },
});

export const { addToCart, updateCart, deleteFromCart, addProduct } = cartSlice.actions;

export const addProductAsync = (product) => async (dispatch) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(addProduct(product));
  } catch (error) {
    console.error('Lỗi khi thêm sản phẩm:', error);
  }
};

export default cartSlice.reducer;