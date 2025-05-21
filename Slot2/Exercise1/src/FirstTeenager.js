import people from "./DataPeople";


function FirstTeenager() {
    let teenager = null;
  
    for (let i = 0; i < people.length; i++) {
      if (people[i].age >= 13 && people[i].age <= 19) {
        teenager = people[i];
        break;
      }
    }
  
    if (teenager === null) {
      return (
        <div>
          <h2>First Teenager</h2>
          <p>No teenager found.</p>
        </div>
      );
    }
  
    return (
      <div>
        <h2>First Teenager</h2>
        <table className="people-table"  border="1">
          <thead>
            <tr>
              <th>Name</th><th>Age</th><th>Occupation</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>{teenager.name}</td>
            <td>{teenager.age}</td>
            <td>{teenager.occupation}</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
  
  export default FirstTeenager;