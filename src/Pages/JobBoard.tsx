import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import SingleJobComponent from '../Components/SingleJobComponent';
import { useDispatch } from 'react-redux';
import { fetchJobs, URL } from '../Redux/actions/actionCreators';

function JobBoard() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchJobs(URL))
    }, [])
  return (
    <Container style={{overflowY: 'scroll', height: '50vh'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} style={{cursor: 'pointer'}}>
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