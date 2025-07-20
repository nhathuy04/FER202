import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditQuestionForm = ({ show, onHide, courseId, questionIndex, questionToEdit, onSave }) => {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  useEffect(() => {
    if (questionToEdit) {
      setQuestion(questionToEdit.question || '');
      setChoices([...(questionToEdit.choices || ['', '', '', ''])]);
      setCorrectAnswer(questionToEdit.correctAnswer || '');
    }
  }, [questionToEdit]);

  const handleSave = () => {
    const updatedChoices = choices.filter(choice => choice.trim() !== '');
    if (!question || updatedChoices.length < 2 || !correctAnswer || !updatedChoices.includes(correctAnswer)) {
      alert('Vui lòng nhập ít nhất 2 lựa chọn và đảm bảo đáp án đúng nằm trong các lựa chọn!');
      return;
    }
    const updatedQuestion = {
      question,
      choices: updatedChoices,
      type: 'MCQs',
      correctAnswer,
    };
    onSave(courseId, questionIndex, updatedQuestion);
    onHide();
  };

  if (!show) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sửa câu hỏi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Câu hỏi</Form.Label>
            <Form.Control
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Nhập câu hỏi"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lựa chọn</Form.Label>
            {Array.from({ length: 4 }, (_, i) => (
              <Form.Control
                key={i}
                type="text"
                value={choices[i] || ''}
                onChange={(e) => {
                  const newChoices = [...choices];
                  newChoices[i] = e.target.value;
                  setChoices(newChoices);
                }}
                placeholder={`Lựa chọn ${i + 1}`}
                className="mb-2"
              />
            ))}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Đáp án đúng</Form.Label>
            <Form.Control
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              placeholder="Nhập đáp án đúng"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Hủy
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditQuestionForm;