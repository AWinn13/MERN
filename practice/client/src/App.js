import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Slider from '@mui/material/Slider';
import CelebrationIcon from '@mui/icons-material/Celebration';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <div className="class">
        <h1>Hello</h1>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button variant="text">Text</Button>
          </Grid>
          <Grid item xs={4}>

            <Button variant="contained">Contained</Button>
          </Grid>
          <Button variant="outlined">Outlined</Button>
        </Grid>
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

      </div>
    </div>
  );
}

export default App;
