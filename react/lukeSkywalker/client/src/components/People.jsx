import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


const People = () => {
  const { id } = useParams();
  const [wookie, setWookie] = useState({
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    eye_color: '',
    homeworld: '',
  });

  const nav = useNavigate();
  
  useEffect(() => {
    axios
      .get(`http://swapi.dev/api/people/${id}`)
      .then((response) => {
        setWookie(response.data);
        console.log(wookie);
      })
      .catch(err =>
        nav('/error')
      );
  }, [id]);





  return (
    <div>
      <Box id='box' sx={{ maxWidth: 400 }}>
        <Card variant='outlined'>
          <CardContent>
            <Typography variant='h5' component='div'>
              {wookie.name}
            </Typography>
            <Typography variant='body2'>Height: {wookie.height} cm</Typography>
            <Typography variant='body2'>Mass: {wookie.mass} kg</Typography>
            <Typography variant='body2'>Hair: {wookie.hair_color}</Typography>
            <Typography variant='body2'>
              Eye Color: {wookie.eye_color}
            </Typography>
            <Typography variant='body2'>
              Homeworld: {wookie.homeworld.name}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default People;
