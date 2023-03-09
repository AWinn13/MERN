import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Slider from '@mui/material/Slider';
import CelebrationIcon from '@mui/icons-material/Celebration';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <div className="class">
        <h1>Hello</h1>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Fab size="small" color="secondary" aria-label="add">
          <CelebrationIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="add">
          <HomeIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">

        </Fab>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Slider aria-label="Volume" />
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </div>
    </div>
  );
}

export default App;
