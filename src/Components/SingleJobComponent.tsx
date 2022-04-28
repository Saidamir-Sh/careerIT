import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/system';

function SingleJobComponent() {
  return (
    <Card>
      <CardContent sx={{m: 0, p: 1}}>
        <Typography variant='subtitle1' fontWeight={600}>Front end developer</Typography>
        <Typography variant='subtitle2' color='primary' fontSize={14} >Undisclosed salary</Typography>
        <Box display='flex' sx={{mt: 3}}>
            <Box display='flex' style={{alignItems:'center'}}>
                <BusinessIcon color='disabled'/>
                <Typography variant='subtitle2' color='disabled' >Facebook</Typography>
            </Box>
            <Box display='flex' style={{marginLeft: '3em', alignItems:'center'}}>
                <LocationOnIcon color='disabled'/>
                <Typography variant='subtitle2' color='disabled' >USA</Typography>
            </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SingleJobComponent