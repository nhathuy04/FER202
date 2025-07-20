import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { setUserAnswer, resetQuiz, finishQuiz, fetchQuestions } from "../store/quizSlice";
import { Container, Card, Button, Row, Col, Badge, Spinner } from "react-bootstrap";

const QuizStartPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTimeLeft = localStorage.getItem("timeLeft");
    return savedTimeLeft ? JSON.parse(savedTimeLeft) : 600;
  });

  const dispatch = useDispatch();
  const { questions, userAnswers, score, quizFinished, status, error } = useSelector((state) => state.quiz);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    dispatch(setUserAnswer({ questionIndex: currentQuestion, answer }));
    if (answer === questions[currentQuestion].correctAnswer) {
      Swal.fire({ text: "Đúng!", icon: "success", timer: 1000 });
    } else {
      Swal.fire({ text: "Sai!", icon: "error", timer: 1000 });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleFirst = () => setCurrentQuestion(0);
  const handleLast = () => setCurrentQuestion(questions.length - 1);

  const handleFinish = () => {
    if (timeLeft > 0) {
      Swal.fire({
        title: "Bạn có chắc không?",
        text: "Bạn vẫn còn thời gian. Bạn có muốn nộp bài không?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Vâng, nộp bài!",
      }).then((result) => {
        if (result.isConfirmed) finishQuizAction();
      });
    } else {
      finishQuizAction();
    }
  };

  const finishQuizAction = () => {
    dispatch(finishQuiz());
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    const wrongAnswers = questions.length - correctAnswers;

    Swal.fire({
      title: "Kết quả Quiz",
      html: `
        <h2 style="color: red;">Tổng điểm: ${score}</h2>
        <p>Số câu đúng: ${correctAnswers}</p>
        <p>Số câu sai: ${wrongAnswers}</p>
      `,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Xem lại Quiz",
      cancelButtonText: "Bắt đầu lại",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/quiz/review", { state: { userAnswers } });
        resetTimeLeft();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        dispatch(resetQuiz());
        setCurrentQuestion(0);
        resetTimeLeft();
      } else {
        navigate("/quiz");
      }
    });
  };

  const handleQuizPage = () => {
    Swal.fire({
      title: "Bạn có chắc không?",
      text: "Bạn muốn quay lại và hủy kết quả!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vâng, quay lại!",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Đã xóa!",
          text: "Quiz của bạn đã bị xóa.",
          icon: "success",
        });
        setTimeout(() => {
          Swal.close();
          navigate("/quiz");
          dispatch(resetQuiz());
          setCurrentQuestion(0);
          resetTimeLeft();
        }, 1000);
      }
    });
  };

  const resetTimeLeft = () => {
    localStorage.removeItem("timeLeft");
    setTimeLeft(600);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (userAnswers.length === 0 && questions.length > 0 && status === 'succeeded') {
      dispatch(resetQuiz());
    }
  }, [questions, userAnswers, dispatch, status]);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (!quizFinished) {
        setTimeLeft((prev) => {
          const newTimeLeft = prev - 1;
          localStorage.setItem("timeLeft", JSON.stringify(newTimeLeft));
          return newTimeLeft;
        });
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [quizFinished]);

  useEffect(() => {
    if (quizFinished) {
      localStorage.removeItem("timeLeft");
    }
  }, [quizFinished]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft, handleFinish]);

  if (status === 'loading') return <div className="text-center"><Spinner animation="border" /></div>;
  if (status === 'failed') return <div className="text-center text-danger">Lỗi: {error}</div>;
  if (!questions || questions.length === 0) return <div className="text-center">Không có câu hỏi để hiển thị.</div>;
  if (currentQuestion >= questions.length) setCurrentQuestion(0);

  return (
    <Container className="my-4">
      <Card>
        <Card.Header>
          <h2>Quiz JavaScript</h2>
          <Badge bg={minutes < 1 ? "danger" : "secondary"}>
            Thời gian còn lại: {minutes}:{seconds < 10 ? "0" : ""}{seconds}
          </Badge>
        </Card.Header>
        <Card.Body>
          <Card.Title>Câu {currentQuestion + 1}: {questions[currentQuestion].question}</Card.Title>
          <Row>
            {questions[currentQuestion].choices.map((choice, index) => (
              <Col xs={12} md={6} className="mb-2" key={index}>
                <Button
                  variant={
                    userAnswers[currentQuestion] === choice
                      ? userAnswers[currentQuestion] === questions[currentQuestion].correctAnswer
                        ? "success"
                        : "danger"
                      : "outline-primary"
                  }
                  onClick={() => handleAnswer(choice)}
                  className="w-100"
                >
                  {choice}
                </Button>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col>
              <Button variant="outline-secondary" onClick={handleFirst} disabled={currentQuestion === 0} className="me-2">Đầu tiên</Button>
              <Button variant="outline-secondary" onClick={handlePrev} disabled={currentQuestion === 0} className="me-2">Trước</Button>
              <Button variant="outline-secondary" onClick={handleNext} disabled={currentQuestion === questions.length - 1} className="me-2">Tiếp</Button>
              <Button variant="outline-secondary" onClick={handleLast} disabled={currentQuestion === questions.length - 1}>Cuối cùng</Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              {questions.map((_, index) => (
                <Button
                  key={index}
                  variant={
                    currentQuestion === index
                      ? "primary"
                      : userAnswers[index] === null
                        ? "outline-secondary"
                        : userAnswers[index] === questions[index].correctAnswer
                          ? "success"
                          : "danger"
                  }
                  onClick={() => setCurrentQuestion(index)}
                  className="me-1 mb-1"
                >
                  {index + 1}
                </Button>
              ))}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Button variant="danger" onClick={handleQuizPage} className="me-2">Trang Quiz</Button>
              <Button variant="success" onClick={handleFinish}>Hoàn thành</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default QuizStartPage;