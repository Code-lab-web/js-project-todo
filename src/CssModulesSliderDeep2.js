import * as React from 'react';
import Slider from '@mui/material/Slider';
// webpack, Parcel or else will inject the CSS into the page
import styles from './CssModulesSliderDeep2.module.css';

export default function CssModulesSliderDeep2() {
  return (
    <div>
      <Slider defaultValue={30} />
      <Slider
        defaultValue={30}
        className={styles.slider}
        slotProps={{ thumb: { className: styles.thumb } }}
      />
    </div>
  );
}