import React from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';

function SearchComponent() {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 } ]
  return (
    <Container maxWidth="sm" style={{
        minWidth: "60%",
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
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 250, mr: 2 }}
            renderInput={(params) => <TextField {...params} label="By category" />}
          />
            <TextField id="outlined-basic"  label="Search for jobs..." variant="outlined" fullWidth  sx={{mr: 2}}/>
            <Button sx={{px: 4}} variant='outlined' size='large' startIcon={<SearchIcon />}>Search</Button>
        </Box>
    </Container>
  )
}

export default SearchComponent