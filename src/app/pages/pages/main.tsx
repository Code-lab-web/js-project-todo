import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      {/* Your app */}
    </StyledEngineProvider>
  </React.StrictMode>
);