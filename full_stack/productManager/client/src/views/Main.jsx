import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/ProductList';

import React, { useState, useEffect } from 'react';
import { Divider } from '@mui/material';


const Main = (props) => {
  const [productList, setProductList] = useState([]);
  
  const createProduct = (newProduct) => {
    axios.post('http://localhost:8080/api/products', newProduct )
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products')
      .then((res) => {
        setProductList(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeProduct = (id) => {
    setProductList(productList.filter((product) => product._id !== id));
  };

  

  return (
    <div>
      <Form makeProduct= {createProduct} product={{title:'', price:'', description:''}}/>
      <Divider/>
       {productList && <ProductList products = {productList} removeProduct = {removeProduct} />}
    </div>
  );
};

export default Main;
