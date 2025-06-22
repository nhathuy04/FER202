import React, { useState, useEffect, useContext } from 'react';
import { Card, Form } from 'react-bootstrap';
import { QuizContext } from './Quiz';

const Question = ({ question, options, index, selectedAnswer, result }) => {
  const { handleAnswerSelect } = useContext(QuizContext);
  const [chosenAnswer, setChosenAnswer] = useState(selectedAnswer);

  useEffect(() => {
    setChosenAnswer(selectedAnswer);
  }, [selectedAnswer]);

  const handleChange = (event) => {
    const answer = event.target.value;
    setChosenAnswer(answer);
    handleAnswerSelect(index, answer);
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <h4>{question}</h4>
        <Form>
          {options.map((option, optIndex) => (
            <div key={optIndex} className="mb-2">
              <Form.Check
                type="radio"
                id={`option-${index}-${optIndex}`}
                name={`answer-${index}`}
                value={option}
                label={option}
                checked={chosenAnswer === option}
                onChange={handleChange}
              />
            </div>
          ))}
        </Form>
        {result !== undefined && (
          <p className={result ? 'text-success' : 'text-danger'}>
            {result ? 'Correct!' : `Incorrect. Correct answer: ${options.find(opt => opt === question.correctAnswer)}`}
          </p>
        )}
      </Card.Body>
    </Card>
  );
};

export default Question;