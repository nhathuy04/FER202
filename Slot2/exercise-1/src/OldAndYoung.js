import people from "./DataPeople";

function OldAndYoung() {
  if (people.length === 0) {
    return (
      <div>
        <h2>Old and Young Person</h2>
        <p>No people data available.</p>
      </div>
    );
  }
  let old = people[0];
  let young = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i].age > old.age) {
      old = people[i];
    }
    if (people[i].age < young.age) {
      young = people[i];
    }
  }

  return (
    <div>
      <h2>Old and Young Person</h2>

      <h3>Old Person</h3>
      <table className="people-table" border="1" style={{ marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{old.name}</td><td>{old.age}</td><td>{old.occupation}</td>
          </tr>
        </tbody>
      </table>
      <h3>Young Person</h3>
      <table className="people-table" border="1">
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{young.name}</td><td>{young.age}</td><td>{young.occupation}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OldAndYoung;
