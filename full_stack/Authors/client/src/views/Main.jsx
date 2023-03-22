import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DeleteButton from '../components/DeleteButton';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link} from "react-router-dom";


const Main = () => {
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/authors')
      .then((res) => {
        setAuthorList(res.data.authors);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (authorDelete) =>{
    setAuthorList(authorList.filter((author)=>author._id !== authorDelete))
};
  

  return (
    <div>
      <Paper elevation={2}>
        <Box sx={{ width: 350, margin: '0 auto' }}>
          <TableContainer>
            <Table sx={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
              <TableHead>
                <TableRow>
                  <TableCell>Author</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {authorList &&
                  authorList.map((author, i) => (
                    <TableRow>
                      <TableCell>{author.name}</TableCell>
                      <TableCell>
                        <Link key={i} to={`/${author._id}`}>
                          <EditIcon />
                        </Link>
                        <DeleteButton authorId={author._id} successCallback={() =>removeFromDom(author._id)} />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </div>
  );
};

export default Main;
