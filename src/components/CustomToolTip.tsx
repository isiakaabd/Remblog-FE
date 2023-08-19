import { Tooltip, Zoom } from '@mui/material';
import { FC } from 'react';
import { CustomToolTipProps } from './type';

const CustomToolTip: FC<CustomToolTipProps> = ({ title, children }) => {
  return (
    <Tooltip title={title} arrow TransitionComponent={Zoom} followCursor>
      {children}
    </Tooltip>
  );
};

export default CustomToolTip;
