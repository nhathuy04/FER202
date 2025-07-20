import { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addQuestion, fetchQuestions } from "../store/quizSlice";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, FormControl, Alert } from "react-bootstrap";

const AddQuestionPage = () => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChoiceChange = (index, value) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    switch (name) {
      case "question":
        if (!value.trim()) newErrors.question = "Vui lòng nhập câu hỏi!";
        else delete newErrors.question;
        break;
      case "choices":
        if (choices.some((c) => !c.trim())) newErrors.choices = "Tất cả lựa chọn phải được điền!";
        else delete newErrors.choices;
        break;
      case "correctAnswer":
        if (!value || !choices.includes(value)) newErrors.correctAnswer = "Đáp án đúng phải nằm trong lựa chọn!";
        else delete newErrors.correctAnswer;
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "question") validateField("question", value);
    if (name.startsWith("choice")) validateField("choices", choices);
    if (name === "correctAnswer") validateField("correctAnswer", value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!question.trim()) newErrors.question = "Vui lòng nhập câu hỏi!";
    if (choices.some((c) => !c.trim())) newErrors.choices = "Tất cả lựa chọn phải được điền!";
    if (!correctAnswer || !choices.includes(correctAnswer)) newErrors.correctAnswer = "Đáp án đúng phải nằm trong lựa chọn!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addQuestion({
        question,
        choices,
        type: "MCQs",
        correctAnswer,
      }));
      // Gọi lại fetchQuestions để làm mới danh sách câu hỏi
      dispatch(fetchQuestions()).then(() => {
        Swal.fire({
          title: "Thành công!",
          text: `Đã thêm thành công câu hỏi vào lúc ${new Date().toLocaleString("vi-VN", {
            timeZone: "Asia/Ho_Chi_Minh",
          })}`,
          icon: "success",
          confirmButtonText: "OK",
          timer: 3000,
          timerProgressBar: true,
        }).then(() => {
          navigate("/quiz");
        });
      });
    }
  };

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>Thêm câu hỏi mới</Card.Title>
          {Object.keys(errors).length > 0 && (
            <Alert variant="danger" onClose={() => setErrors({})} dismissible>
              Vui lòng sửa các lỗi sau: {Object.values(errors).join(", ")}
            </Alert>
          )}
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Câu hỏi</Form.Label>
              <Form.Control
                type="text"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onBlur={handleBlur}
                placeholder="Nhập câu hỏi"
                isInvalid={!!errors.question}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.question}
              </Form.Control.Feedback>
            </Form.Group>
            {choices.map((choice, index) => (
              <Form.Group className="mb-3" key={index}>
                <Form.Label>Lựa chọn {index + 1}</Form.Label>
                <Form.Control
                  type="text"
                  name={`choice${index + 1}`}
                  value={choice}
                  onChange={(e) => handleChoiceChange(index, e.target.value)}
                  onBlur={handleBlur}
                  placeholder={`Nhập lựa chọn ${index + 1}`}
                  isInvalid={!!errors.choices}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.choices}
                </Form.Control.Feedback>
              </Form.Group>
            ))}
            <Form.Group className="mb-3">
              <Form.Label>Đáp án đúng</Form.Label>
              <Form.Select
                name="correctAnswer"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
                onBlur={handleBlur}
                isInvalid={!!errors.correctAnswer}
                required
              >
                <option value="">Chọn đáp án đúng</option>
                {choices.map((choice, index) => (
                  <option key={index} value={choice}>
                    {choice || `Lựa chọn ${index + 1}`}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.correctAnswer}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" variant="primary">
              Thêm câu hỏi
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddQuestionPage;