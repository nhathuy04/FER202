import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  image,
  showAdditional,
}) {
  const showAdditionalData = () => {
    if (!additional || Object.keys(additional).length === 0) {
      alert("No Additional Information");
      return;
    }
    const pairs = Object.entries(additional);
    const text = pairs
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    alert(text);
  };

  return (
    <Card
      className="mb-3 shadow-sm"
      style={{ width: "18rem", backgroundColor: "#fff3cd", borderRadius: "10px" }}
    >
      <Card.Img variant="top" src={image} alt={name} style={{ height: "300px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className="text-dark">{name}</Card.Title>
        <Card.Text>
          <strong>Scientific Name:</strong> {scientificName}
          <br />
          <strong>Size:</strong> {size} kg
          <br />
          <strong>Diet:</strong> {diet.join(", ")}
        </Card.Text>
        <Button
          variant="danger"
          onClick={showAdditionalData}
          className="w-100 mt-2"
          disabled={!additional}
        >
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}

// Xác định PropTypes
AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  image: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
};

// Định nghĩa defaultProps
AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information",
  },
};