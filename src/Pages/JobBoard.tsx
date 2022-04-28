import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import SingleJobComponent from '../Components/SingleJobComponent';

function JobBoard() {
  return (
    <Container style={{overflowY: 'scroll', height: '50vh'}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
            <Grid item xs={12}>
                <SingleJobComponent />
            </Grid>
        </Grid>
    </Container>
  )
}

export default JobBoard