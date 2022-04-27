import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: green[100],
    },
  },
})

export default theme