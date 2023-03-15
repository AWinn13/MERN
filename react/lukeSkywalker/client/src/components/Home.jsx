import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

const Home = () => {

    const [wookie, setWookie] = useState([])

    const getData = () => {
        axios.get('http://swapi.dev/api/people/1/')
            .then((response) => {
                setWookie(response.data)
                console.log(wookie)
            }
            )
        }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='center'>
      <form action=''>
        <Grid container spacing={2}>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
              <InputLabel id='label'>Search For</InputLabel>
              <Select autoWidth labelId='label' id='select' label='Search For' defaultValue=''>
                <MenuItem value='People'>People</MenuItem>
                <MenuItem value='Planets'>Planets</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField id='outlined-number' label='ID' type='number' />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 2, minWidth: 250 }}>
              <Button variant='contained' color='success' onClick={getData}>
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
