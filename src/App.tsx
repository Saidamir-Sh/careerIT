import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Style/theme'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import NavbarComponent from './Components/NavbarComponent'
import SearchComponent from './Components/SearchComponent';
import SingleJobComponent from './Components/SingleJobComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container style={{
        minWidth: "100%",
        height: "100vh",
        padding: '0%'
      }}>
        <BrowserRouter>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Routes>
                <Route path='/' element={<NavbarComponent />}/>
              </Routes>
            </Grid>
            <Grid item xs={12}>
              <Routes>
                <Route path='/' element={<SearchComponent />}/>
              </Routes>
            </Grid>
            <SingleJobComponent />
          </Grid>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
