import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Question from './Question';
import QuestionInput from './QuestionInput.js';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';

export const QuizContext = React.createContext();
const quizData = [
  {
    question: 'What is ReactJS?',
    answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    question: 'What is JSX?',
    answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
    correctAnswer: 'A syntax extension for JavaScript'
  }
];
const Quiz = () => {
  const [state, setState] = useState({
    questions: quizData,
    currentQuestion: 0,
    score: 0,
    quizEnd: false,
    selectedAnswers: {},
    results: {}
  });

  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const newResults = {};
    state.questions.forEach((quiz, index) => {
      if (state.selectedAnswers[index]) {
        newResults[index] = state.selectedAnswers[index] === quiz.correctAnswer;
      }
    });
    setState(prevState => ({ ...prevState, results: newResults }));
  }, [state.selectedAnswers, state.questions, state.currentQuestion]);

  const handleAnswerSelect = (questionIndex, answer) => {
    const newAnswers = { ...state.selectedAnswers, [questionIndex]: answer };
    let newScore = state.score;
    if (answer === state.questions[questionIndex].correctAnswer) {
      newScore += 1;
    }
    setState({
      ...state,
      selectedAnswers: newAnswers,
      score: newScore
    });
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
    const confirmSubmit = window.confirm(`You have answered ${answeredCount} questions. Do you want to submit?`);
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
      selectedAnswers: {},
      results: {}
    });
  };

  const { questions, currentQuestion, score, quizEnd, selectedAnswers, results } = state;

  if (quizEnd) {
    return <Result score={score} total={questions.length} replay={replay} />;
  }

  return (
    <QuizContext.Provider value={{ handleAnswerSelect }}>
      <div className="container mt-3">
        {!showAddForm && (
          <Button variant="primary" onClick={() => setShowAddForm(true)} className="mb-4">
            Add Question
          </Button>
        )}
        {showAddForm && <QuestionInput setShowAddForm={setShowAddForm} />}
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].answers}
          index={currentQuestion}
          selectedAnswer={selectedAnswers[currentQuestion] || null}
          result={results[currentQuestion]}
        />
        <div className="d-flex justify-content-between mt-3">
          <Button onClick={goPrevious} disabled={currentQuestion === 0} variant="primary">
            Back
          </Button>
          <Button onClick={handleSubmit} variant="success">
            Submit
          </Button>
          <Button onClick={goNext} disabled={currentQuestion === questions.length - 1} variant="primary">
            Next
          </Button>
        </div>
      </div>
    </QuizContext.Provider>
  );
};

export default Quiz;