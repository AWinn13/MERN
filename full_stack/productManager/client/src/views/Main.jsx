import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Main = (props) => {
  const [productList, setProductList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products')
      .then((res) => {
        setProductList(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeProduct = (id) => {
    setProductList(productList.filter((product) => product._id != id));
  };

  return (
    <div>
      <Form />
      <hr />
      <hr />
      {productList && <List product = {productList} removeProduct = {removeProduct} />}
    </div>
  );
};

export default Main;
