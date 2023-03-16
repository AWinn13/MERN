import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';


const Home = () => {

    const [thing, setThing] = useState('')
    const [id, setId] = useState(1)


    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        nav(`/${thing}/${id}`)
    }
  return (
    <div className='center'>
      <form id='form' onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
              <InputLabel id='label'>Search For</InputLabel>
              <Select autoWidth color='secondary' labelId='label' id='select' label='Search For' defaultValue='' onChange={(e) => setThing(e.target.value)}>
                <MenuItem value='people'>People</MenuItem>
                <MenuItem value='planets'>Planets</MenuItem>
                <MenuItem value='starships'>Starship</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField color='secondary' id='outlined-number' label='ID' type='number' onChange={(e) => setId(e.target.value)} />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 2, minWidth: 250 }}>
              <Button variant='contained' color='success' type='submit'>
                Do or Do Not. There is no try
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Home;
