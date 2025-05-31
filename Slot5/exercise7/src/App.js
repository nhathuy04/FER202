import React from 'react';
import Exercise7 from './Exercise7';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const cardData = [
    {
      id: 1,
      text: 'Some text inside the first card',
      imageUrl: '/toyota-corolla-cross-240510-c03.jpg',
    },
    {
      id: 2,
      text: 'Some text inside the first card',
      imageUrl: '/toyota-corolla-cross-240510-c03.jpg',
    },
    {
      id: 3,
      text: 'Some text inside the first card',
      imageUrl: '/toyota-corolla-cross-240510-c03.jpg',
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Cards Columns</h1>
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <Exercise7 id={card.id} text={card.text} imageUrl={card.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;