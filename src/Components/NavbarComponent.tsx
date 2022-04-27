import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Style/theme'


function NavbarComponent() {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          CareerIT
        </Typography>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
  )
}

export default NavbarComponent