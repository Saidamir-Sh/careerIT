import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmailIcon from '@mui/icons-material/Email';
import { useTypedSelector } from '../Redux/hooks/useTypeSelector';
import { Button } from '@mui/material';
import SavedJobsModal from './SavedJobsModal';
import { useNavigate } from 'react-router';
import CustomizedSwitches from './ModeSwitch';


function NavbarComponent() {

  const navigate = useNavigate()
  const savedJobs = useTypedSelector((state) => state.savedJobs)

  return (
    <AppBar sx={{py: 1}} position="static" color="primary">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h5" fontWeight={900}>CareerIT</Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} component='div' style={{
          width: '25%',
          position: 'absolute',
          right: '2%'
        }} >
          <CustomizedSwitches />
          <Badge badgeContent={savedJobs.length} color="info">
            <SavedJobsModal />
          </Badge>
          <Button onClick={() => navigate('/singup')} variant='outlined' color='inherit'>Sign up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarComponent