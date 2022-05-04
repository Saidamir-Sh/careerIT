import { Container, Grid } from '@mui/material'
import React from 'react'
import DetailsComponent from '../Components/DetailsComponent'
import NavbarComponent from '../Components/NavbarComponent'

function JobDetails() {

    const detailsStyle = {
        position: 'absolute', 
        width: '80%', 
        bottom: 0, 
        left: '50%', 
        transform: 'translate(-50%, 0%)', 
        height: '50vh', 
        overflowY: 'scroll'
    }
  return (
    <Container style={{
        minWidth: "100%",
        height: "100vh",
        padding: '0%'
      }}>
        <NavbarComponent />
        <Grid display='flex'>
            <Grid item xs={8}  sx={detailsStyle}>
                <DetailsComponent />
            </Grid>
        </Grid>
    </Container>
  )
}

export default JobDetails