import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/system';
import { Job } from '../Redux/store/Interfaces';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../Redux/hooks/useTypeSelector';
import {  saveJob } from '../Redux/actions/actionCreators';
import { Button } from '@mui/material';
import SnackBarMessage from './SnackBarMessage'

function SingleJobComponent(props: {job: Job}) {

  const dispatch = useDispatch()
  const saved = useTypedSelector((state) => state.saved)
  const savedJobs = useTypedSelector((state) => state.savedJobs)


  const handleSave = () => {
    dispatch<any>(saveJob(props.job))
  }
  return (

    <Card style={{width: '100%', position: 'relative'}}>
      <CardContent sx={{m: 0, p: 1}}>
        <Typography variant='subtitle1' fontWeight={600}>{props.job.title}</Typography>
        <Typography variant='subtitle2' color='primary' fontSize={14} >{!props.job.salary ? 'Undisclosed salary' : props.job.salary}</Typography>
        <Box display='flex' sx={{mt: 3}}>
            <Box display='flex' style={{alignItems:'center'}}>
                <BusinessIcon color='disabled'/>
                <Typography variant='subtitle2' color='disabled' >{props.job.company_name}</Typography>
            </Box>
            <Box display='flex' style={{marginLeft: '3em', alignItems:'center'}}>
                <LocationOnIcon color='disabled'/>
                <Typography variant='subtitle2' color='disabled' >{!props.job.candidate_required_location ? 'Remote' : props.job.candidate_required_location}</Typography>
            </Box>
            <Box  style={{position: 'absolute', right: '2%', top: '40%'}}>
              <SnackBarMessage job={props.job}/>
            </Box>
        </Box>
      </CardContent>
    </Card>

  )
}

export default SingleJobComponent