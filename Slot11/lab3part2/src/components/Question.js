import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Question = ({ question, options, onAnswer, onNext, onPrevious, selectedAnswer, isFirst, isLast, onSubmit }) => {
  const [chosenAnswer, setChosenAnswer] = useState(selectedAnswer);

  useEffect(() => {
    setChosenAnswer(selectedAnswer);
  }, [selectedAnswer]);

  const handleChange = (event) => {
    const answer = event.target.value;
    setChosenAnswer(answer);
    onAnswer(answer);
  };

  return (
    <Card>
      <Card.Body>
        <Button onClick={onSubmit} variant="success" className="mb-3">
          Submit
        </Button>
        <h4>{question}</h4>
        
        <Form>
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <Form.Check
                type="radio"
                id={`option-${index}`}
                name="answer"
                value={option}
                label={option}
                checked={chosenAnswer === option}
                onChange={handleChange}
              />
            </div>
          ))}
        </Form>
        {selectedAnswer && <p >Your answer: {selectedAnswer}</p>}
        <div >
          <Button onClick={onPrevious} disabled={isFirst} variant="primary">
            Back
          </Button>
          <Button onClick={onNext} disabled={isLast} variant="primary" className="ms-2"> {/* Chỉ vô hiệu hóa khi là câu cuối */}
            Next
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Question;