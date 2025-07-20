import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async (_, { rejectWithValue }) => {
  try {
    console.log('Đang thử tải /data/courses.json');
    const response = await axios.get('/data/courses.json', { timeout: 20000 });
    console.log('Dữ liệu courses từ file:', response.data);
    return response.data.courses;
  } catch (error) {
    console.error('Lỗi tải courses:', error.message, error.response?.status, error.response?.statusText);
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      console.log('Dữ liệu từ localStorage:', JSON.parse(savedCourses));
      return JSON.parse(savedCourses);
    }
    return rejectWithValue(error.message || 'Không tải được courses.json');
  }
});

const courseSlice = createSlice({
  name: 'courses',
  initialState: { courses: [], loading: false, error: null, searchQuery: '' },
  reducers: {
    addCourse(state, action) {
      console.log('Thêm khóa học:', action.payload);
      const maxId = state.courses.length > 0 ? Math.max(...state.courses.map(c => parseInt(c.id))) : 0;
      const newCourse = {
        ...action.payload,
        id: String(maxId + 1),
      };
      state.courses.push(newCourse);
      localStorage.setItem('courses', JSON.stringify(state.courses));
      console.log('State sau khi thêm:', state.courses);
    },
    updateCourse(state, action) {
      const index = state.courses.findIndex(c => c.id === action.payload.id);
      if (index !== -1) state.courses[index] = action.payload;
      localStorage.setItem('courses', JSON.stringify(state.courses));
    },
    deleteCourse(state, action) {
      state.courses = state.courses.filter(c => c.id !== action.payload);
      localStorage.setItem('courses', JSON.stringify(state.courses));
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      console.log('SearchQuery updated:', state.searchQuery);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log('Fetch pending');
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        console.log('Fetch fulfilled, courses:', action.payload);
        const existingIds = new Set(state.courses.map(c => c.id));
        const newCourses = action.payload.filter(c => !existingIds.has(c.id));
        state.courses = [...state.courses, ...newCourses];
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        console.log('Fetch rejected, error:', action.payload);
        state.error = action.payload || 'Không thể tải danh sách khóa học';
        state.loading = false;
        const savedCourses = localStorage.getItem('courses');
        if (savedCourses) {
          state.courses = JSON.parse(savedCourses);
        }
      });
  },
});

export const { addCourse, updateCourse, deleteCourse, setSearchQuery } = courseSlice.actions;
export default courseSlice.reducer;