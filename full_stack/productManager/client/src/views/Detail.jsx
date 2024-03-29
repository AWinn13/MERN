
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import{Link} from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Description,
  AttachMoney,
} from '@mui/icons-material';
import ListIcon from '@mui/icons-material/List';


const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((res) => setProduct(res.data.product) )
      
      .catch((err) => console.error(err));
      console.log(product)
  }, []);

  return (
    
    <Box sx={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
      <Link to={`/products/${product._id}/update`}>EDIT</Link>
      <List>
        <ListItem>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>{product.title}</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText>{product.price}</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText>{product.description}</ListItemText>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
};

export default Detail;
