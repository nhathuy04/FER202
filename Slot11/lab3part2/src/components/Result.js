import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Result = ({ score, replay }) => {
  return (
    <Card className="text-center mt-5">
      <Card.Body>
        <Card.Title>Quiz Ended</Card.Title>
        <Card.Text>Your Score: {score}</Card.Text>
        <Button variant="success" onClick={replay}>Replay Quiz</Button>
      </Card.Body>
    </Card>
  );
};

export default Result;