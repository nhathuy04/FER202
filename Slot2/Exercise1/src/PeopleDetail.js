
import './App.css';

function PeopleDetail(){
    const person ={
        name: 'Nhật Huy',
        age : 20,
        occupation :'i am a software Engineer'
    }
    return(
        
     <div className="person">
        <h2>Name: {person.name}</h2>
        <p>Age: {person.age}</p>
        <p>Occupation: {person.occupation}</p>
     </div>
    );
}   

export default PeopleDetail;