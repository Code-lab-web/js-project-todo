import * as React from 'react';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

export default function CssModulesPriority() {
  return (
    <CacheProvider value={cache}>
      {/* Your component tree. Now you can override Material UI's styles. */}
    </CacheProvider>
  );
}

export default function GlobalCssPriority() {
  return (
    <StyledEngineProvider injectFirst>
      {/* Your component tree. Now you can override Material UI's styles. */}
    </StyledEngineProvider>
  );
}
// webpack, Parcel or else will inject the CSS into the page
import styles from './CssModulesSlider.module.css';

export default function CssModulesSlider() {
  return (
    <div>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} className={styles.slider} />
    </div>
  );
}