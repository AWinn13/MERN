import { Routes, Route, Link} from "react-router-dom";
import React from "react";
import './App.css';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Main from "./views/Main";
import Add from "./views/Add";
import Update from "./views/Update";



function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#386438',
      },
      secondary: {
        main: '#7c59bd',
      },
    },
  })

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
      <h1>Favorite Authors</h1>
      <Link to='/'>Home</Link> <br />
      <Link to='/add'>Add an Author</Link>
        <Routes>
          <Route element={<Main/>} path='/'/>
          <Route element={<Add/>} path='/add'/>
          <Route element={<Update/>} path='/:id'/>
        </Routes>
      </ThemeProvider> 
      
    </div>
  );
}

export default App;
