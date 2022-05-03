import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../Redux/hooks/useTypeSelector';
import { saveJob } from '../Redux/actions/actionCreators';
import { Job } from '../Redux/store/Interfaces';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function SnackBarMessage (props: {job: Job}) {
  
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const savedJobs = useTypedSelector((state) => state.savedJobs) 

  const handleClick = (job: Job) => {
    setOpen(true);
    dispatch<any>(saveJob(job))
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button variant='contained' onClick={() => {handleClick(props.job)}} disabled={savedJobs?.some((savedJob) => savedJob._id == props.job._id)}>Save</Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Job saved successfully!
        </Alert>
      </Snackbar>
      
    </div>
  );
}
