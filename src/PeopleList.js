import people from "./DataPeople";


function PeopleList (){
    return(
    <div>
      <ul>
      <h2>List Of People </h2>
        {people.map((p,index) =>(
          <li key={index}>
           Name: {p.name} - Age: {p.age} - Occupation: {p.occupation}
          </li>  
        ))}
      </ul>
    </div>
    );
}

export default PeopleList;