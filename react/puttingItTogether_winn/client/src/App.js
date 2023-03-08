import logo from './logo.svg';
import './App.css';
import People from './components/People';

let peopleArr = [
  {'firstName': 'Robert', 'lastName' : 'Ross', 'age' : 75, 'hairColor' : 'Brown' },
  {'firstName': 'Piper', 'lastName' : 'Winn', 'age' : 7, 'hairColor' : 'Black and Gray' },
  {'firstName': 'June', 'lastName' : 'Winn', 'age' : 3, 'hairColor' : 'Gray and Black' },
  {'firstName': 'Vincent', 'lastName' : 'van Gough', 'age' : 37, 'hairColor' : 'Red' },
]

function App() {
  return (
    <div className="App">
      {peopleArr.map(person => {
        return <People firstName = {person.firstName} lastName = {person.lastName} age = {person.age} hairColor = {person.hairColor} />
      })
      }
    </div>
  );
}

export default App;
