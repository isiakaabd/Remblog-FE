import { Typography } from '@mui/material';
import { FC } from 'react';
interface Prop {
  message?: string;
}
const Empty: FC<Prop> = ({ message }) => {
  return (
    <Typography sx={{ width: '100%', textAlign: 'center' }} variant="h2">
      {message ? message : 'No Data Found!!'}
    </Typography>
  );
};

export default Empty;
