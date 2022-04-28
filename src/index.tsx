import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/montserrat"
import "@fontsource/montserrat/900.css"
import "@fontsource/montserrat/600.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './Style/theme'
import { ThemeProvider } from '@material-ui/core/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
