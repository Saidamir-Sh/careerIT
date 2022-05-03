import React, { useState, ChangeEvent } from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import { useTypedSelector } from '../Redux/hooks/useTypeSelector';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { fetchByCategory, fetchSearched, URL } from '../Redux/actions/actionCreators';

function SearchComponent() {

  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [byCategory, setbyCategory] = useState<string>('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const category = [
    { label: 'DevOps'},
    { label: 'Finance'},
    { label: 'Writing'},
    { label: 'Human Resources'},
    { label: 'Data'},
    { label: 'Product'},
    { label: 'Marketing'},
    { label: 'Design'},
    { label: 'All others'} ]

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
            options={category}
            onChange={(event, value) => dispatch<any>(fetchByCategory(URL, value))}
            sx={{ width: 250, mr: 2 }}
            renderInput={(params) => <TextField {...params} label="By category" />}
          />
            <TextField id="outlined-basic" onChange={handleSearch}  label="Search for jobs..." variant="outlined" fullWidth  sx={{mr: 2}}/>
            <Button sx={{px: 4}} onClick={() => dispatch<any>(fetchSearched(URL, searchQuery))} variant='outlined' size='large' startIcon={<SearchIcon />}>Search</Button>
        </Box>
    </Container>
  )
}

export default SearchComponent