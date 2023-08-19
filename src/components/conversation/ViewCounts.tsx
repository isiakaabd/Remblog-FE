import { IconButton } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import CustomToolTip from 'components/CustomToolTip';
const ViewCounts = () => {
  return (
    <CustomToolTip title="View Count">
      <IconButton size="large" color="success">
        <PublicIcon sx={{ fontSize: { md: '3rem', xs: '2.5rem' } }} />
      </IconButton>
    </CustomToolTip>
  );
};

export default ViewCounts;
