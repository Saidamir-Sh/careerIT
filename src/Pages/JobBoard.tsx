import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import SingleJobComponent from '../Components/SingleJobComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../Redux/hooks/useTypeSelector';
import { fetchJobs, URL } from '../Redux/actions/actionCreators';
import { State } from '../Redux/store/Interfaces';

function JobBoard() {

    const dispatch = useDispatch()
    const jobs = useTypedSelector((state) => state.jobs)

    useEffect(() => {
        dispatch<any>(fetchJobs(URL))
    }, [])

  return (
    <Container style={{overflowY: 'scroll', height: '50vh'}}>
        <Grid container spacing={2}>
            {
                jobs.map((job) => (
                    <Grid item xs={12} key={job._id} style={{cursor: 'pointer'}}>
                        <SingleJobComponent  job={job}/>
                    </Grid>
                ))
            }
        </Grid>
    </Container>
  )
}

export default JobBoard