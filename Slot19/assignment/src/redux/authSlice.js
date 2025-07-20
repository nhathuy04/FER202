import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false, user: null, searchQuery: '' },
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      if (username === 'admin' && password === 'admin123') {
        state.isAuthenticated = true;
        state.user = { username, role: 'admin' };
      } else if (username === 'user' && password === 'user123') {
        state.isAuthenticated = true;
        state.user = { username, role: 'user' };
      } else {
        throw new Error('Tài khoản hoặc mật khẩu không đúng');
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.searchQuery = ''; // Xóa tìm kiếm khi logout
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload; // Cập nhật searchQuery từ payload
      console.log('SearchQuery updated:', state.searchQuery); // Debug
    },
  },
});

export const { login, logout, setSearchQuery } = authSlice.actions;
export default authSlice.reducer;