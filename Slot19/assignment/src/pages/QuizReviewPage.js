import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Card, ListGroup, Button } from "react-bootstrap";

const QuizReviewPage = () => {
  const { id: courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { questions } = useSelector((state) => state.quiz);
  const userAnswers = location.state ? location.state.userAnswers : [];
  const course = useSelector((state) => state.courses.courses.find(c => c.id === courseId));

  const handleBack = () => {
    navigate(`/quiz/${courseId}`);
  };

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>Xem lại Quiz {course?.name || 'Khóa học'}</Card.Title>
          {questions.map((question, index) => (
            <Card
              key={index}
              className={`mb-3 ${userAnswers[index] === question.correctAnswer ? "border-success" : "border-danger"}`}
            >
              <Card.Body>
                <Card.Title>Câu {index + 1}: {question.question}</Card.Title>
                <ListGroup>
                  {question.choices.map((choice, choiceIndex) => (
                    <ListGroup.Item
                      key={choiceIndex}
                      variant={userAnswers[index] === choice ? "info" : ""}
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