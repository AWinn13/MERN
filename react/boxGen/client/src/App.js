import './App.css';
import Form from './components/Form';
import Box from './components/Box';
import React, { useState } from 'react';

function App() {
  // set the state so it can be passed to the jsx files 
  const [colors, setColors] = useState([]);
  // create a new array w/ spread. 
  const newColor = (color) => {
    setColors([...colors, color]);
  }
  return (
    <div>

      <Form color={newColor} />
      <div className="d-flex">
        {colors.map((colors) => (
          <Box color={colors} />
        ))}
      </div>
    </div>
  );
}

export default App;
