
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default ({ removeProduct, product }) => {
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8080/api/products/${id}`)
      .then((res) => {
        removeProduct(id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Products</h3>
      <List sx={{ width: '100%', maxWidth: 400 }}>
        {product.map((product, i) => {
          <ListItem>
            <ListItemText>
              <Link to={`/products/${product._id}`} key={i}>
                {product.title}
              </Link>
            </ListItemText>
            <ListItemButton
              onClick={(e) => {
                deleteProduct(product._id);
              }}
            >
              <DeleteIcon />
            </ListItemButton>
          </ListItem>;
        })}
      </List>
    </div>
  );
};
