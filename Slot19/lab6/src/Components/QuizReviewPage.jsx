import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Card, ListGroup, Button } from "react-bootstrap";

const QuizReviewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { questions } = useSelector((state) => state.quiz);
  const userAnswers = location.state ? location.state.userAnswers : [];

  const handleBack = () => {
    navigate("/quiz");
  };

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>Xem lại Quiz</Card.Title>
          {questions.map((question, index) => (
            <Card
              key={index}
              className={`mb-3 ${userAnswers[index] === question.correctAnswer ? "border-success" : "border-danger"}`}
              style={{ backgroundColor: userAnswers[index] === question.correctAnswer ? "" : "#ffebee" }}
            >
              <Card.Body>
                <Card.Title>Câu {index + 1}: {question.question}</Card.Title>
                <ListGroup>
                  {question.choices.map((choice, choiceIndex) => (
                    <ListGroup.Item
                      key={choiceIndex}
                      variant={userAnswers[index] === choice ? "info" : ""}
                      style={{ backgroundColor: userAnswers[index] === choice && userAnswers[index] !== question.correctAnswer ? "#ffebee" : "" }}
                    >
                      {choice}
                    </ListGroup.Item>
                  ))}
                  <ListGroup.Item variant="success">
                    Đáp án đúng: {question.correctAnswer}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          ))}
          <Button variant="primary" onClick={handleBack}>
            Hoàn thành Review
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default QuizReviewPage;