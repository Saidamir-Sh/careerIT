import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';


function NavbarComponent() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h5" color="inherit" component="div">
          CareerIT
        </Typography>
        <Box component='div'  style={{
          marginLeft: '15%'
        }}>
          <Typography>Home</Typography>
          <Typography>Jobseekers</Typography>
          <Typography>Employers</Typography>
          <Typography>Jobs</Typography>
          <Typography>Features</Typography> 
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarComponent