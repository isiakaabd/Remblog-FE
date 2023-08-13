import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface TextErrorProps {
  children?: ReactNode;
}

const TextError: React.FC<TextErrorProps> = ({ children }) => {
  return (
    <Typography variant="body2" color={'error'}>
      {children}
    </Typography>
  );
};

export default TextError;
