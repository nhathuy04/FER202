import React from "react";
import AnimalCard from "./components/AnimalCard";
import animals from "./Data";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const handleShowAdditional = () => {}; // Hàm rỗng để đáp ứng PropTypes

  return (
    <div className="App p-4">
      <h1 className="mb-4 text-center">Animals</h1>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {animals.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional || {}}
            image={animal.image}
            showAdditional={handleShowAdditional}
          />
        ))}
      </div>
    </div>
  );
};

export default App;