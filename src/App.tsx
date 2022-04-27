import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Style/theme'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/ListItem'
import NavbarComponent from './Components/NavbarComponent'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container style={{
        border: "solid",
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
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
