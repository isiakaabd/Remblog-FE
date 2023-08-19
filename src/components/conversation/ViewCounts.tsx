import { IconButton, Tooltip } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
const ViewCounts = () => {
  return (
    <Tooltip title="View Count">
      <IconButton size="large" color="success">
        <PublicIcon sx={{ fontSize: { md: '3rem', xs: '2.5rem' } }} />
      </IconButton>
    </Tooltip>
  );
};

export default ViewCounts;
