import React, { useEffect } from 'react'
import { Button, Typography, Link } from '@mui/material'
import { Box } from '@mui/system'
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Interweave } from 'interweave'
import { useParams } from 'react-router'
import { useTypedSelector } from '../Redux/hooks/useTypeSelector'
import { useDispatch } from 'react-redux';
import { fetchJobs, URL } from '../Redux/actions/actionCreators';

function DetailsComponent() {

    const dispatch = useDispatch()
    const params = useParams()
    const jobId = params.job_id
    const jobs = useTypedSelector((state) => state.jobs)
    const selectedJob = jobs.find((job) => job._id === jobId)

    useEffect(() => {   
        dispatch<any>(fetchJobs(URL))
    }, [])

    const detailsStyle = {
        position: 'absolute', 
        width: '70%', 
        bottom: 0, 
        left: '50%', 
        transform: 'translate(-50%, 0%)', 
        height: '50vh', 
        overflowY: 'scroll'
    }
    const headerStyle = {
        position: 'absolute', 
        width: '70%', 
        top: '15%', 
        left: '50%', 
        transform: 'translate(-50%, 0%)', 
        height: '50vh', 
    }
  return (
    <Box component='div'>
        <Box component='div' sx={headerStyle}>
            <Typography variant='h4' fontWeight={600}>{selectedJob?.title}</Typography>
            <Typography color='primary'>{!selectedJob?.salary ? 'Undisclosed salary' : selectedJob.salary}</Typography>
            <Box display='flex' sx={{mt: 3}}>
            <Box display='flex' style={{alignItems:'center'}}>
                <BusinessIcon color='disabled'/>
                <Typography variant='subtitle2' color='disabled' >{selectedJob?.company_name}</Typography>
            </Box>
            <Box display='flex' style={{marginLeft: '3em', alignItems:'center'}}>
                <LocationOnIcon color='disabled'/>
                <Typography variant='subtitle2' color='disabled' >{!selectedJob?.candidate_required_location ? 'Remote' : selectedJob.candidate_required_location}</Typography>
            </Box>
            <Box display='flex' style={{marginLeft: '3em', alignItems:'center'}}>
                <AccessTimeIcon color='disabled' />
                <Typography variant='subtitle2' color='disabled' >{selectedJob?.job_type.replace('_', ' ').toUpperCase()}</Typography>
            </Box>
        </Box>
        <Button sx={{mt: 3}} variant='contained' color='primary'><Link href={selectedJob?.url} color='inherit' underline='none'>Apply</Link></Button>
        </Box>
        <Box component='div' sx={detailsStyle}>
            <Typography variant='h6' fontWeight={600}>Description :</Typography>
            <Interweave content={selectedJob?.description}/>
        </Box>
    </Box>
  )
}

export default DetailsComponent