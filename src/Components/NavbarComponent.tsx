import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import BeenhereIcon from '@mui/icons-material/Beenhere';


function NavbarComponent() {
  return (
    <AppBar sx={{py: 1}} position="static" color="primary">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h5" color="inherit" component="div">
          CareerIT
        </Typography>
        <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between'}}  style={{
          marginLeft: '15%',
          width: '50%'
        }}>
          <Typography>Home</Typography>
          <Typography>Jobseekers</Typography>
          <Typography>Employers</Typography>
          <Typography>Jobs</Typography>
          <Typography>Features</Typography> 
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} component='div' style={{
          position: 'absolute',
          right: '2%'
        }} >
          <Badge badgeContent={4} color="success">
            <BeenhereIcon color="inherit" />
          </Badge>
          <Avatar />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarComponent