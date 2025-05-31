import React from 'react';

const Exercise7 = ({ id, text, imageUrl}) => {
  const getCardStyle = () => {
    switch (id) {
      case 1:
        return {border:'10px solid #007bff', backgroundColor: '#007bff', color: 'black', textAlign:'center'};
      case 2:
        return {border:'10px solid #ffc107', backgroundColor: '#ffc107', color: 'black', textAlign:'center'};
      case 3:
        return {border:'10px solid #dc3545', backgroundColor: '#dc3545', color: 'black', textAlign:'center'};
      default:
        return { backgroundColor: '#fff' };
    }
  };

  return (
    <div className="card" style={getCardStyle()}>
      <img src={imageUrl} className="card-img-top" alt="Car" />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Exercise7;