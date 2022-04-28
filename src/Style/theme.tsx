import { blueGrey, green } from '@material-ui/core/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: blueGrey[700],
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
})

export default theme