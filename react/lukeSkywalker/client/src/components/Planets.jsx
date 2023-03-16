
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Planets = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState({
    name: '',
    diameter: '',
    population: '',
    orbital_period: '',
  });

  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://swapi.dev/api/planets/${id}`)
      .then((response) => {
        setPlanet(response.data);
        console.log(planet);
      })
      .catch(err =>
        nav('/error')
      );
  }, [id]);


  return (
    <div>
      <Box id='box' sx={{ maxWidth: 400 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant='h5' component='div'>
              {planet.name}
            </Typography>
            <Typography variant='body2'>Climate: {planet.climate}</Typography>
            <Typography variant='body2'>
              Diameter: {planet.diameter} kg
            </Typography>
            <Typography variant='body2'>
              Orbital Period: {planet.orbital_period}
            </Typography>
            <Typography variant='body2'>
              Population: {planet.population}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Planets;
