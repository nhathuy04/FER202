import people from "./DataPeople";

function AverageAgeByOccupation() {
  
  const occupationData = {};

  people.forEach((person) => {
    const occupation = person.occupation;
    if (!occupationData[occupation]) {
      occupationData[occupation] = { totalAge: 0, count: 0 };
    }
    occupationData[occupation].totalAge += person.age;
    occupationData[occupation].count += 1;
  });

  
  const averageAges = Object.entries(occupationData).map(
    ([occupation, data]) => ({
      occupation,
      averageAge: (data.totalAge / data.count).toFixed(1), 
    })
  );

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <table className="people-table" border="1" style={{ width: "40%", margin: "auto" }}>
        <thead>
          <tr>
            <th>Occupation</th>
            <th>Average Age</th>
          </tr>
        </thead>
        <tbody>
          {averageAges.map(({ occupation, averageAge }, index) => (
            <tr key={index}>
              <td>{occupation}</td>
              <td>{averageAge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AverageAgeByOccupation;
