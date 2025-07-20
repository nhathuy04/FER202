import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { updateCourse } from '../redux/courseSlice';
import './AddQuestion.css';

function AddQuestion() {
  const { id: courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const course = useSelector(state => state.courses.courses.find(c => c.id === courseId));
  const [questionData, setQuestionData] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
  });
  const [errors, setErrors] = useState({ question: '', options: '', correctAnswer: '' });

  useEffect(() => {
    if (!course) {
      setErrors({ ...errors, question: 'Không tìm thấy khóa học' });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({ ...questionData, [name]: value });
    if (name === 'question' && value.trim()) setErrors((prev) => ({ ...prev, question: '' }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...questionData.options];
    newOptions[index] = value;
    setQuestionData({ ...questionData, options: newOptions });
    validateOptions();
  };

  const validateOptions = () => {
    const trimmedOptions = questionData.options.filter(opt => opt.trim());
    if (trimmedOptions.length < 2) {
      setErrors((prev) => ({ ...prev, options: 'Câu hỏi phải có ít nhất 2 lựa chọn!' }));
    } else {
      setErrors((prev) => ({ ...prev, options: '' }));
    }
  };

  const handleAddOption = () => {
    if (questionData.options.length < 6) {
      setQuestionData({ ...questionData, options: [...questionData.options, ''] });
    }
  };

  const handleRemoveOption = (index) => {
    if (questionData.options.length > 2) {
      const newOptions = questionData.options.filter((_, i) => i !== index);
      setQuestionData({ ...questionData, options: newOptions });
      validateOptions();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { question: '', options: '', correctAnswer: '' };
    let hasError = false;

    if (!questionData.question.trim()) {
      newErrors.question = 'Vui lòng nhập câu hỏi!';
      hasError = true;
    }
    if (questionData.options.filter(opt => opt.trim()).length < 2) {
      newErrors.options = 'Câu hỏi phải có ít nhất 2 lựa chọn!';
      hasError = true;
    }
    if (!questionData.correctAnswer || !questionData.options.includes(questionData.correctAnswer)) {
      newErrors.correctAnswer = 'Đáp án đúng phải nằm trong các lựa chọn!';
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    const updatedCourse = {
      ...course,
      quiz: [...(course.quiz || []), { ...questionData, options: questionData.options.filter(opt => opt.trim()) }],
    };
    dispatch(updateCourse(updatedCourse));
    Swal.fire({
      title: 'Thêm câu hỏi thành công!',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      navigate(`/course/${courseId}`);
    });
  };

  if (errors.question && !course) return <Alert variant="danger" className="text-center">{errors.question}</Alert>;

  return (
    <Card className="add-question-card shadow-lg p-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
      <Card.Body>
        <h3 className="text-center mb-4 text-primary">Thêm Câu Hỏi Cho {course.name}</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Câu hỏi</Form.Label>
            <Form.Control
              as="textarea"
              name="question"
              value={questionData.question}
              onChange={handleChange}
              rows={3}
              placeholder="Nhập câu hỏi của bạn..."
              isInvalid={!!errors.question}
              className="rounded-3"
            />
            <Form.Control.Feedback type="invalid">{errors.question}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Lựa chọn</Form.Label>
            {questionData.options.map((option, index) => (
              <Row key={index} className="align-items-center mb-2">
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Lựa chọn ${index + 1}`}
                    isInvalid={!!errors.options}
                    className="rounded-3"
                  />
                </Col>
                <Col xs={2}>
                  {questionData.options.length > 2 && (
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleRemoveOption(index)}
                      className="rounded-circle"
                    >
                      -
                    </Button>
                  )}
                  {index === questionData.options.length - 1 && questionData.options.length < 6 && (
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={handleAddOption}
                      className="rounded-circle ms-2"
                    >
                      +
                    </Button>
                  )}
                </Col>
              </Row>
            ))}
            {errors.options && <div className="text-danger">{errors.options}</div>}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Đáp án đúng</Form.Label>
            <Form.Control
              as="select"
              name="correctAnswer"
              value={questionData.correctAnswer}
              onChange={handleChange}
              isInvalid={!!errors.correctAnswer}
              className="rounded-3"
            >
              <option value="">Chọn đáp án đúng</option>
              {questionData.options.map((opt, idx) => (
                opt.trim() && <option key={idx} value={opt}>{opt}</option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errors.correctAnswer}</Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              type="submit"
              variant="primary"
              className="rounded-3 py-2"
              style={{ fontSize: '1.1rem' }}
            >
              Thêm Câu Hỏi
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate(`/course/${courseId}`)}
              className="rounded-3 py-2"
              style={{ fontSize: '1rem' }}
            >
              Quay lại
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AddQuestion;