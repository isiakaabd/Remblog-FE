import { IconButton } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import CustomToolTip from 'components/CustomToolTip';
import { FC } from 'react';
interface Prop {
  iconSize?: string;
}
const ViewCounts: FC<Prop> = ({ iconSize }) => {
  let size = iconSize === 'small' ? true : false;
  return (
    <CustomToolTip title="View Count">
      <IconButton size={size ? 'small' : 'large'} color="success">
        <PublicIcon sx={{ fontSize: { md: size ? '1.5rem' : '3rem', xs: size ? '1.5rem' : '2.5rem' } }} />
      </IconButton>
    </CustomToolTip>
  );
};

export default ViewCounts;
