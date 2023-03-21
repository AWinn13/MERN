import React, { useState } from 'react';
import  Grid  from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/products', {
      title,
      price,
      description,
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container direction='column' rowSpacing={2} justifyContent='space-around'>
          <Grid item>
            <TextField
             className='box'
              id='outlined'
              label='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
            className='box'
              id='outlined'
              label='Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
            className='box'
              id='outlined'
              label='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button type='submit' variant='outlined'>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
