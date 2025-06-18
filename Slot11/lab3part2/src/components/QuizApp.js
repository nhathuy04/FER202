import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizApp = () => {
  const [state, setState] = useState({
    questions: [
      { id: 1, question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
      { id: 2, question: "What is the largest planet?", options: ["Jupiter", "Saturn", "Mars", "Earth"], answer: "Jupiter" }
    ],
    currentQuestion: 0,
    score: 0,
    quizEnd: false,
    selectedAnswers: {}
  });

  const handleAnswer = (answer) => {
    const { questions, currentQuestion, score, selectedAnswers } = state;
    const newAnswers = { ...selectedAnswers, [currentQuestion]: answer };
    let newScore = score;
    if (answer === questions[currentQuestion].answer) {
      newScore += 1;
    }
    setState({ ...state, selectedAnswers: newAnswers, score: newScore });
  };

  const goNext = () => {
    if (state.currentQuestion + 1 < state.questions.length) {
      setState({ ...state, currentQuestion: state.currentQuestion + 1 });
    } else {
      setState({ ...state, quizEnd: true });
    }
  };

  const goPrevious = () => {
    if (state.currentQuestion > 0) {
      setState({ ...state, currentQuestion: state.currentQuestion - 1 });
    }
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(state.selectedAnswers).length;
    const confirmSubmit = window.confirm(`You have answered ${answeredCount} out of ${state.questions.length} questions. Do you want to submit?`);
    if (confirmSubmit) {
      setState({ ...state, quizEnd: true });
    }
  };

  const replay = () => {
    setState({
      questions: state.questions,
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswers: {}
    });
  };

  const { questions, currentQuestion, score, quizEnd, selectedAnswers } = state;

  if (quizEnd) {
    return <Result score={score} total={questions.length} replay={replay} />;
  }

  return (
    <div className="container mt-3">
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        onNext={goNext}
        onPrevious={goPrevious}
        selectedAnswer={selectedAnswers[currentQuestion] || null}
        isFirst={currentQuestion === 0}
        isLast={currentQuestion === questions.length - 1}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default QuizApp;