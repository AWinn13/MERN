import React, { useState, useEffect } from 'react';
import  Grid  from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const Update = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`).then((res) => {
      setTitle(res.data.product.title);
      setPrice(res.data.product.price);
      setDescription(res.data.product.description);
      console.log(title)
    });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={updateProduct}>
        <Grid container direction='column' justifyContent='center'>
          <Grid item>
            <TextField
              id='outlined'
              label='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id='outlined'
              label='Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id='outlined'
              label='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button type='submit' variant='outlined'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Update;
