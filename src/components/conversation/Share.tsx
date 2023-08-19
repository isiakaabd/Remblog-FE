import { IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import CustomToolTip from 'components/CustomToolTip';
const Share = () => {
  return (
    <CustomToolTip title="Share">
      <IconButton size="large" color="secondary">
        <ShareIcon sx={{ fontSize: { md: '3rem', xs: '2.5rem' } }} />
      </IconButton>
    </CustomToolTip>
  );
};

export default Share;
