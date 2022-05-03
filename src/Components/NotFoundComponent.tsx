import { Container, Typography } from '@mui/material'
import React from 'react'

function NotFoundComponent() {
    const style = {
        position: 'absolute' as 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
        textAlign: 'center'
      };

  return (
    <Container sx={style}>
        <Typography variant="h4" color='primary' fontWeight={600} component="h2">No jobs found !</Typography>
        <Typography fontWeight={600}>Try again.</Typography>
    </Container>
  )
}

export default NotFoundComponent