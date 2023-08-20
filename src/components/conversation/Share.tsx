import { IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import CustomToolTip from 'components/CustomToolTip';
import { FC } from 'react';
interface Prop {
  iconSize?: string;
}
const Share: FC<Prop> = ({ iconSize }) => {
  let size = iconSize === 'small' ? true : false;
  return (
    <CustomToolTip title="Share">
      <IconButton size={size ? 'small' : 'large'} color="secondary">
        <ShareIcon sx={{ fontSize: { md: size ? '1.5rem' : '3rem', xs: size ? '1.5rem' : '2.5rem' } }} />
      </IconButton>
    </CustomToolTip>
  );
};

export default Share;
