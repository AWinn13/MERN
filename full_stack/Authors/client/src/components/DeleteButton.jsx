import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default  ({ authorId, successCallback }) => {
  const deleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8080/api/authors/${authorId}`)
      .then((res) => {
        successCallback();
      })
      .catch((err) => console.log(err));
  };
  return (
    <DeleteIcon
      onClick={() => deleteAuthor()}
    />
  );
};
