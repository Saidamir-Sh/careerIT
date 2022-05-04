import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTypedSelector } from '../Redux/hooks/useTypeSelector';
import SingleJobComponent from './SingleJobComponent';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  overflowY: 'scroll',
  bgcolor: 'background.paper',
  border: '1px solid grey',
  boxShadow: 24,
  p: 4,
};

function SavedJobsModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const savedJobs = useTypedSelector((state) => state.savedJobs)

  return (
    <div>
      <Button onClick={handleOpen} variant='outlined' color='inherit'>Saved jobs</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{mb: 2}} id="modal-modal-title" variant="h6" fontWeight={600} component="h2">
           Saved Jobs :
          </Typography>
          <Grid container spacing={2}>
            {
                savedJobs.map((job) => (
                    <Grid item xs={12} key={job._id} style={{cursor: 'pointer'}}>
                        <SingleJobComponent job={job}/>
                    </Grid>
                ))
            }
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default SavedJobsModal