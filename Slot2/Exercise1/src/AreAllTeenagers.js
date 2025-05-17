import people from "./DataPeople";

function AreAllTeenagers() {
  let allAreTeenagers = true;

  for (let i = 0; i < people.length; i++) {
    const age = people[i].age;
    if (age < 13 || age > 19) {
      allAreTeenagers = false;
      break;
    }
  }

  let message;

  if (allAreTeenagers) {
    message = "Yes, all people are teenagers.";
  } else {
    message = "No, not all people are teenagers.";
  }

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      <p>{message}</p>
    </div>
  );
}

export default AreAllTeenagers;
