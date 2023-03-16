import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Starship = () => {
  const { id } = useParams();
  const [ship, setShip] = useState({
    name: '',
    model: '',
    manufacturer: '',
    length: '',
    crew: '',
  });

  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://swapi.dev/api/starships/${id}`)
      .then((response) => {
        setShip(response.data);
       
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
              {ship.name}
            </Typography>
            <Typography variant='body2'>model: {ship.model} cm</Typography>
            <Typography variant='body2'>
              manufacturer: {ship.manufacturer} kg
            </Typography>
            <Typography variant='body2'>length: {ship.length}</Typography>
            <Typography variant='body2'>crew: {ship.crew}</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Starship;
