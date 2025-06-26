import * as React from 'react';
import Slider from '@mui/material/Slider';
import './GlobalCssSliderDeep.css';
import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

export default function StyledComponents() {
  return <CustomizedSlider defaultValue={30} />;
}

export default function GlobalCssSliderDeep() {
  return <Slider defaultValue={30} />;
}