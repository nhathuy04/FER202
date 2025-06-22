import React, { useState, useEffect, useRef } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import '../QuestionBank.css';

function QuestionBank() {
  const questions = [
    { id: 1, text: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], correctAnswer: "Pacific Ocean" },
    // Thêm các câu hỏi khác nếu cần
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const timerRef = useRef(null);

  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("highScore")) || 0;
  });

  useEffect(() => {
    if (timeLeft > 0 && !isQuizFinished && currentQuestion < questions.length) {
      timerRef.current = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && !isQuizFinished) {
      handleAnswerCheck("");
    }
    return () => clearInterval(timerRef.current);
  }, [timeLeft, isQuizFinished, currentQuestion]);

  useEffect(() => {
    if (currentQuestion >= questions.length) {
      setIsQuizFinished(true);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score);
      }
    }
  }, [currentQuestion, score, highScore]);

  const handleAnswerCheck = (answer) => {
    clearInterval(timerRef.current);
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setFeedback(<><FaCheckCircle /> Correct! 🎉</>);
      setScore((prev) => prev + 1);
    } else {
      setFeedback(<><FaTimesCircle /> Incorrect! The correct answer is: {questions[currentQuestion].correctAnswer}</>);
    }
    setTimeout(() => {
      setFeedback("");
      setTimeLeft(10);
      setSelectedAnswer("");
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setIsQuizFinished(true);
      }
    }, 2000);
  };

  const handleFinishQuiz = () => {
    setIsQuizFinished(true);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  };

  const getTimeColor = () => (timeLeft < 5 ? "text-danger" : "");

  if (isQuizFinished) {
    return (
      <Container className="mt-4">
        <h2>Quiz Finished!</h2>
        <p>Your Score: {score}/{questions.length}</p>
        <p>High Score: {highScore}</p>
      </Container>
    );
  }

  if (currentQuestion >= questions.length) return null;

  return (
    <Container fluid className="question-bank-container">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2>Question {currentQuestion + 1}/{questions.length}:</h2>
          <h3>{questions[currentQuestion].text}</h3>
          <Row className="mt-4 justify-content-center">
            {questions[currentQuestion].options.map((option) => (
              <Col key={option} xs={12} sm={6} md={3} className="mb-3">
                <Button
                  variant={selectedAnswer === option ? "success" : option === "Indian Ocean" ? "success" : "outline-secondary"}
                  onClick={() => handleAnswerCheck(option)}
                  disabled={!!feedback}
                  block
                  className="option-button"
                >
                  {option}
                </Button>
              </Col>
            ))}
          </Row>
          {feedback && (
            <p className="feedback-text mt-3"><FaTimesCircle /> {feedback.props.children[1]}</p>
          )}
          <p className={`mt-3 ${getTimeColor()}`}>Time Left: {timeLeft}s</p>
          {currentQuestion === questions.length - 1 && (
            <Button variant="primary" onClick={handleFinishQuiz} className="mt-3 finish-button">
              Finish Quiz
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionBank;