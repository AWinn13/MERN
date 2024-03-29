import './App.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starship from './components/Starship';
import Error from './components/Error';

function App() {
  return (
    <div className="App" >
      <Home/>
      <Routes>
      
        
        <Route path='/planets/:id' element={<Planets/>} />
        <Route path='/people/:id' element={<People/>} />
        <Route path='/starships/:id' element={<Starship/>} />
        <Route path='/error' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
