import people from "./DataPeople";

function PeopleTable(){
    return (
        <div className="table-container">
          
        <table className="people-table"  border="1">
          <thead>
            <tr>
              <th>Name</th><th>Age</th><th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {people.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td><td>{p.age}</td><td>{p.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
    }
    export default PeopleTable;