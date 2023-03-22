import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const Add = () => {
  const nav = useNavigate();

  const [formErrors, setFormErrors] = useState([]);

  const createAuthor = (newAuthor) => {
    axios
      .post('http://localhost:8080/api/authors', newAuthor)
      .then(res => {
        nav('/');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        const errorRes = err.response.data.error.errors;
        setFormErrors(errorRes);
      });
  };

  return (
    <div>
        <h3>Add an Author</h3>
      <Form
        submitForm={createAuthor}
        errors={formErrors}
        authorName={{ name: '' }}
      />
    </div>
  );
};

export default Add;
