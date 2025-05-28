import people from "./DataPeople";

function GroupByOccupation() {
  const grouped = {};
  people.forEach((person) => {
    const key = person.occupation;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(person);
  });
  return (
    <div>
      <h2>Group People by Occupation</h2>
      {Object.keys(grouped).map((occupation) => (
        <div key={occupation} style={{ marginBottom: "20px" }}>
          <h3>{occupation}</h3>
          <table className="people-table" border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {grouped[occupation].map((person, index) => (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;
