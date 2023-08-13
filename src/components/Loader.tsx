import { Grid, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { LoaderProp } from './type';
const Loader: FC<LoaderProp> = ({ color, size, ...rest }) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <CircularProgress size={size ? size : 25} thickness={5} {...rest} sx={{ color: color ? color : '#fff' }} />
    </Grid>
  );
};

export default Loader;
