import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

export default (props) => {
  const { submitForm, errors, authorName } = props
  const [name, setName] = useState(authorName.name);
  


  const handleSubmit = (e) => {
    e.preventDefault();

    //! WHAT IS THIS DOING
    submitForm({
      name,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction='column'
          rowSpacing={2}
          justifyContent='space-around'
        >
          <Grid item>
            <TextField
              className='box'
              id='outlined'
              label='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p>{errors.name.message}</p>
            )}
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
