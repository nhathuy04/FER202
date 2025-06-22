import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Result = ({ score, total, replay }) => {
  return (
    <Card className="text-center mt-5 mx-auto" style={{ maxWidth: '500px' }}>
      <Card.Body>
        <Card.Title>Quiz Ended</Card.Title>
        <Card.Text>Your Score: {score} / {total}</Card.Text>
        <Button variant="success" onClick={replay}>Replay Quiz</Button>
      </Card.Body>
    </Card>
  );
};

export default Result;