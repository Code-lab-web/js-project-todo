import darkScrollbar from '@mui/material/darkScrollbar';
import { createTheme } from '@mui/material/styles';

const THEME = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
      }),
    },
  },
});