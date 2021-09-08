/*
 * The Material-UI theme for the whole UI
 */
import { createTheme } from '@material-ui/core/styles';

export default createTheme({
  spacing: 8,
  typography: {
    fontSize: 16,
    fontFamily: ['Lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
      ',',
    ),
  },
  palette: {
    primary: {
      main: '#67AC5B',
    },
    secondary: {
      main: '#86C232',
    },
    textPrimary: {
      main: '#373A3E',
    },
    textSecondary: {
      main: '#848484',
    },
    alternative: {
      main: '#f7fbf7',
    },
  },
  shape: {
    borderRadius: 8,
  },
});
