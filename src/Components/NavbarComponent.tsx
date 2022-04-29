import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmailIcon from '@mui/icons-material/Email';


function NavbarComponent() {
  return (
    <AppBar sx={{py: 1}} position="static" color="primary">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h5" fontWeight={900}>CareerIT</Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} component='div' style={{
          width: '10%',
          position: 'absolute',
          right: '2%'
        }} >
          <Badge badgeContent={4} color="info">
            <FavoriteBorderIcon color="inherit" />
          </Badge>
          <Badge badgeContent={0} color="info">
            <EmailIcon color="inherit" />
          </Badge>
          <Avatar />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarComponent