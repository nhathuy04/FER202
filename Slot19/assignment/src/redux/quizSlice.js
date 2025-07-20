import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchQuestions = createAsyncThunk(
  'quiz/fetchQuestions',
  async (courseId, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const course = state.courses.courses.find(c => c.id === courseId);
      if (course && course.quiz) {
        return course.quiz.map(q => ({
          question: q.question,
          choices: q.options || [],
          type: "MCQs",
          correctAnswer: q.correctAnswer || '',
        }));
      }
      return [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteQuestion = createAsyncThunk(
  'quiz/deleteQuestion',
  async ({ courseId, questionIndex }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const course = state.courses.courses.find(c => c.id === courseId);
      if (course && course.quiz) {
        const newQuiz = course.quiz.filter((_, idx) => idx !== questionIndex);
        // Dispatch action để cập nhật course.quiz (nếu có courseSlice hỗ trợ)
        // Ví dụ: dispatch(updateCourseQuiz({ courseId, quiz: newQuiz }));
        return { courseId, questionIndex };
      }
      throw new Error('Không tìm thấy khóa học hoặc câu hỏi');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateQuestion = createAsyncThunk(
  'quiz/updateQuestion',
  async ({ courseId, questionIndex, updatedQuestion }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const course = state.courses.courses.find(c => c.id === courseId);
      if (course && course.quiz) {
        const newQuiz = [...course.quiz];
        newQuiz[questionIndex] = updatedQuestion;
        // Dispatch action để cập nhật course.quiz (nếu có courseSlice hỗ trợ)
        // Ví dụ: dispatch(updateCourseQuiz({ courseId, quiz: newQuiz }));
        return { courseId, questionIndex, updatedQuestion };
      }
      throw new Error('Không tìm thấy khóa học hoặc câu hỏi');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  questions: [],
  userAnswers: [],
  score: 0,
  quizFinished: false,
  history: [],
  status: 'idle',
  error: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setUserAnswer(state, action) {
      const { questionIndex, answer } = action.payload;
      const prevAnswer = state.userAnswers[questionIndex];
      if (prevAnswer !== null && prevAnswer === state.questions[questionIndex]?.correctAnswer) {
        state.score -= 10;
      }
      state.userAnswers[questionIndex] = answer;
      if (state.questions[questionIndex]?.correctAnswer === answer) {
        state.score += 10;
      }
    },
    resetQuiz(state) {
      state.userAnswers = Array(state.questions.length).fill(null);
      state.score = 0;
      state.quizFinished = false;
    },
    finishQuiz(state) {
      state.quizFinished = true;
      state.history.push({
        score: state.score,
        startTime: new Date().toISOString(),
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.questions = action.payload;
        state.userAnswers = Array(action.payload.length).fill(null);
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteQuestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { questionIndex } = action.payload;
        state.questions = state.questions.filter((_, index) => index !== questionIndex);
        state.userAnswers = state.userAnswers.filter((_, index) => index !== questionIndex);
      })
      .addCase(deleteQuestion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateQuestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateQuestion.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { questionIndex, updatedQuestion } = action.payload;
        state.questions = state.questions.map((q, index) =>
          index === questionIndex ? updatedQuestion : q
        );
      })
      .addCase(updateQuestion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export { fetchQuestions, deleteQuestion, updateQuestion }; // Chỉ xuất các async thunks
export const { setUserAnswer, resetQuiz, finishQuiz } = quizSlice.actions; // Xuất actions từ quizSlice
export default quizSlice.reducer;