import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import GoogleIcon from '@mui/icons-material/Google';

function SingUpComponent() {
  return (
    <Container sx={{width: '40%'}} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Typography variant='h3' textAlign='center' sx={{py: 5}} fontWeight={900} color='primary'>CareerIT</Typography>
        <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <TextField label="Email" fullWidth sx={{mb: 3}}/>
            <TextField label="Password" fullWidth/>
            <Button variant='contained' color='primary' sx={{width: '80%', mt: 4, py: 2}}>Sing up</Button>
            <Button variant='outlined' color='primary' sx={{width: '80%', mt: 4, py: 2}}><GoogleIcon sx={{mr: 2}} /> Sign up with Google</Button>
        </Box>
    </Container>
  )
}

export default SingUpComponent