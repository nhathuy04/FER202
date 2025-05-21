import people from "./DataPeople";

function SortedPeople() {
  const sortedPeople = [...people];
  sortedPeople.sort(function (a, b) {
    if (a.occupation === b.occupation) {
      return a.age - b.age;
    }
    if (a.occupation < b.occupation) {
      return -1;
    }
    if (a.occupation > b.occupation) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <h2>Sorted People by Occupation and Age</h2>
      <table className="people-table" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortedPeople;
