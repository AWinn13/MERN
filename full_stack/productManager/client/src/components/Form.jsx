import React, { useState } from 'react';
import  Grid  from '@mui/material/Grid';
import { TextField, Button } from '@mui/material';


export default (props) => {
  const [title, setTitle] = useState(props.product.title);
  const [price, setPrice] = useState(props.product.price);
  const [description, setDescription] = useState(props.product.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  props.makeProduct({
    title,
    price, 
    description,
  })

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
