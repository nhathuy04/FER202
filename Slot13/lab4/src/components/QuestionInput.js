import React, { useState, useContext } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { QuizContext } from './Quiz';

const QuestionInput = ({ setShowAddForm }) => {
  const { setQuestions } = useContext(QuizContext);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState(['', '', '']);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState('');

  const handleAddQuestion = () => {
    if (newQuestion && newAnswers.every(ans => ans) && newCorrectAnswer) {
      setQuestions(prevQuestions => [
        ...prevQuestions,
        {
          question: newQuestion,
          answers: newAnswers,
          correctAnswer: newCorrectAnswer
        }
      ]);
      setNewQuestion('');
      setNewAnswers(['', '', '']);
      setShowAddForm(false);
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <h3 className="mb-4">Add New Question</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Enter question"
            />
          </Form.Group>
          {newAnswers.map((answer, index) => (
            <Form.Group key={index} className="mb-3">
              <Form.Label>Option {index + 1}</Form.Label>
              <Form.Control
                type="text"
                value={answer}
                onChange={(e) => {
                  const updatedAnswers = [...newAnswers];
                  updatedAnswers[index] = e.target.value;
                  setNewAnswers(updatedAnswers);
                }}
                placeholder={`Enter option ${index + 1}`}
              />
            </Form.Group>
          ))}
          <Form.Group className="mb-3">
            <Form.Label>Correct Answer</Form.Label>
            <Form.Control
              type="text"
              value={newCorrectAnswer}
              onChange={(e) => setNewCorrectAnswer(e.target.value)}
              placeholder="Enter correct answer"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddQuestion}>
            Add Question
          </Button>
          <Button variant="secondary" onClick={() => setShowAddForm(false)} className="ms-2">
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default QuestionInput;