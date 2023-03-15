import logo from './logo.svg';
import './App.css';
import Word from './components/Word';

import Home from './components/Home';
import Color from './components/Color';
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/:word' element={<Word />} />

        <Route path='/:word/:colors/:coloring' element={<Color />} />

      </Routes>
    </div>
  );
}

export default App;
