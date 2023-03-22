import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [author, setAuthor] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/authors/${id}`).then((res) => {
      setAuthor(res.data.author);
    });
  }, []);

  const updateAuthor = (updatedAuthor) => {
    axios
      .put(`http://localhost:8080/api/authors/${id}`, updatedAuthor)
      .then((res) => {
        nav(`/`);
      })
      .catch((err) => {
        console.log(err);
        const errorRes = err.response.data.error.errors;
        setFormErrors(errorRes);
      });
  };

  return (
    <div>
        {author && <Form submitForm={updateAuthor} errors={formErrors} authorName={author} />}
    </div>
  );
};

export default Update;
