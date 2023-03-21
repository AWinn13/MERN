import { Routes, Route, Link} from "react-router-dom";
import React from "react";
import './App.css';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";



function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#7c59bd',
      },
      secondary: {
        main: '#386438',
      },
    },
  })

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
      <h1>Product Manager</h1>
      <Link to='/products'>Home</Link>
      
        <Routes>
          <Route element={<Main/>} path='/products'/>
          <Route element={<Detail/>} path='/products/:id'/>
          <Route element={<Update/>} path='/products/:id/update'/>
        </Routes>
      </ThemeProvider> 
      
    </div>
  );
}

export default App;
