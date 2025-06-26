import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: navy;
  }
`;

const CustomizedSlider = styled((props) => (
  <Slider slotProps={{ thumb: { className: 'thumb' } }} {...props} />
))`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }

  & .thumb {
    border-radius: 1px;
  }
`;

export default function StyledComponentsDeep2() {
  return (
    <div>
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={30} />
    </div>
  );
}

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }

  & .MuiSlider-thumb {
    border-radius: 1px;
  }
`;

export default function StyledComponentsDeep() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={30} />
    </Box>
  );
}
const CustomizedSlider = styled(Slider)(
    ({ theme }) => `
    color: ${theme.palette.primary.main};
  
    :hover {
      color: ${darken(theme.palette.primary.main, 0.2)};
    }
  `,
  );
  <ThemeProvider theme={customTheme}>
  <CustomizedSlider defaultValue={30} />
</ThemeProvider>

<StyledTooltip title="I am navy">
  <Button variant="contained" color="primary">
    Styled tooltip
  </Button>
</StyledTooltip>