import { IconButton, Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
const Share = () => {
  return (
    <Tooltip title="Share">
      <IconButton size="large" color="secondary">
        <ShareIcon sx={{ fontSize: { md: '3rem', xs: '2.5rem' } }} />
      </IconButton>
    </Tooltip>
  );
};

export default Share;
