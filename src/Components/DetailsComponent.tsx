import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Interweave } from 'interweave'
import React from 'react'
import { useParams } from 'react-router'
import { useTypedSelector } from '../Redux/hooks/useTypeSelector'

function DetailsComponent() {

    const params = useParams()
    const jobId = params.job_id
    const jobs = useTypedSelector((state) => state.jobs)
    const selectedJob = jobs.find((job) => job._id === jobId)
    console.log(selectedJob)
  return (
    <Box component='div'>
        <Typography></Typography>
        <Interweave content={selectedJob?.description}/>
    </Box>
  )
}

export default DetailsComponent