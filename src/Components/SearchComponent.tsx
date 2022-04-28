import { Box, Container, Typography, TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

function SearchComponent() {
  return (
    <Container maxWidth="sm" style={{
        minWidth: "50%",
        margin: '3em auto',
        padding: '0%',
      }}>
        <Box component='div' display='flex' sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box component='div' display='flex'>
                <Typography variant='h4' color='primary' sx={{mr: 2}} fontWeight={900}>3,000+</Typography>
                <Typography variant='h4' color='primary' >Browse jobs</Typography>
            </Box>
            <Typography variant='subtitle1' color='inherit' >Find jobs, Employment &#38; Career Opportunities</Typography>
        </Box>
        <Box component='div' display='flex' sx={{pt: 2}}>
            <TextField id="outlined-basic"  label="Search for jobs..." variant="outlined" fullWidth sx={{mr: 2}}/>
            <Button variant='outlined' size='large' startIcon={<SearchIcon />}>Search</Button>
        </Box>
    </Container>
  )
}

export default SearchComponent