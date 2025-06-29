import { useReducer } from "react";
import { resultInitalState } from "./data/Quiz_Data";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";
import "../assets/Quiz.css"; // Đảm bảo đường dẫn đúng

const initialState = {
  currentQuestion: 0,
  answersIdx: null,
  answer: "",
  result: resultInitalState,
  showResult: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ANSWER":
      return { ...state, answersIdx: action.index, answer: action.answer };
    case "SET_RESULT":
      return { ...state, result: action.result, answersIdx: null };
    case "SET_CURRENT_QUESTION":
      return { ...state, currentQuestion: action.currentQuestion };
    case "SHOW_RESULT":
      return { ...state, showResult: action.showResult };
    case "TRY_AGAIN":
      return { ...initialState };
    default:
      throw new Error();
  }
}

const QuizPage = ({ questions }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { question, choices, correctAnswer } = questions[state.currentQuestion];

  const onAnswerClick = (answer, index) => {
    dispatch({
      type: "SET_ANSWER",
      index,
      answer: answer === correctAnswer,
    });
  };

  const onClickNext = () => {
    const newResult = state.answer
      ? {
          ...state.result,
          score: state.result.score + 5,
          correctAnswers: state.result.correctAnswers + 1,
        }
      : {
          ...state.result,
          wrongAnswers: state.result.wrongAnswers + 1,
        };

    dispatch({ type: "SET_RESULT", result: newResult });

    if (state.currentQuestion !== questions.length - 1) {
      dispatch({
        type: "SET_CURRENT_QUESTION",
        currentQuestion: state.currentQuestion + 1,
      });
    } else {
      dispatch({ type: "SET_CURRENT_QUESTION", currentQuestion: 0 });
      dispatch({ type: "SHOW_RESULT", showResult: true });
    }
  };

  const onTryAgain = () => {
    dispatch({ type: "TRY_AGAIN" });
  };

  return (
    <Container className="quiz-container-wrapper">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h2 className="quiz-title">Quiz</h2>
          <Card className="quiz-card">
            {!state.showResult ? (
              <>
                <div className="question-header">
                  <span className="question-count">
                    {state.currentQuestion + 1}/{questions.length}
                  </span>
                </div>
                <h4 className="question-text">{question}</h4>
                <ListGroup className="answer-list mb-5">
                  {choices.map((answer, index) => (
                    <ListGroup.Item
                      action
                      key={answer}
                      onClick={() => onAnswerClick(answer, index)}
                      className={`answer-item ${
                        state.answersIdx === index ? "selected" : ""
                      }`}
                    >
                      {answer}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <div className="text-end">
                  <Button
                    onClick={onClickNext}
                    disabled={state.answersIdx === null}
                    className={`next-button ${
                      state.answersIdx === null ? "disabled" : ""
                    }`}
                  >
                    {state.currentQuestion === questions.length - 1
                      ? "Finish"
                      : "Next"}
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h3 className="result-title">Result</h3>
                <p className="result-text">
                  Total Questions:{" "}
                  <span className="result-value">{questions.length}</span>
                </p>
                <p className="result-text">
                  Total score:{" "}
                  <span className="result-value">{state.result.score}</span>
                </p>
                <p className="result-text">
                  Correct Answers:{" "}
                  <span className="result-value">{state.result.correctAnswers}</span>
                </p>
                <p className="result-text">
                  Wrong Answers:{" "}
                  <span className="result-value">{state.result.wrongAnswers}</span>
                </p>
                <Button variant="danger" onClick={onTryAgain} className="mt-3">
                  Try Again
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
