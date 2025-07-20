import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialQuestions } from '../data/questions'; 

export const fetchQuestions = createAsyncThunk(
  'quiz/fetchQuestions',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      return state.quiz.questions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  questions: initialQuestions, 
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
    addQuestion(state, action) {
      state.questions.push(action.payload);
      state.userAnswers.push(null);
    },
    setUserAnswer(state, action) {
      const { questionIndex, answer } = action.payload;
      const prevAnswer = state.userAnswers[questionIndex];
      if (prevAnswer !== null && prevAnswer === state.questions[questionIndex].correctAnswer) {
        state.score -= 10;
      }
      state.userAnswers[questionIndex] = answer;
      if (answer === state.questions[questionIndex].correctAnswer) {
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
      });
  },
});

export const { addQuestion, setUserAnswer, resetQuiz, finishQuiz } = quizSlice.actions;
export default quizSlice.reducer;