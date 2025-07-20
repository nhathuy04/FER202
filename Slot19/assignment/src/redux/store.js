import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './courseSlice';
import quizReducer from './quizSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    courses: courseReducer,
    quiz: quizReducer,
    auth: authReducer,
  },
  // Sử dụng middleware mặc định, không cần concat thunk
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;