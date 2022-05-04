import { Container, Grid } from '@mui/material'
import React from 'react'
import DetailsComponent from '../Components/DetailsComponent'
import NavbarComponent from '../Components/NavbarComponent'

function JobDetails() {

  return (
    <Container style={{
        minWidth: "100%",
        height: "100vh",
        padding: '0%'
      }}>
        <NavbarComponent />
        <Grid display='flex'>
            <Grid item xs={8}>
                <DetailsComponent />
            </Grid>
        </Grid>
    </Container>
  )
}

export default JobDetails