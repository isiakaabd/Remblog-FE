import { IconButton, Tooltip } from '@mui/material';
import QuickreplyIcon from '@mui/icons-material/QuickreplyOutlined';

const Chat = () => {
  return (
    <Tooltip title="Commen">
      <IconButton size="large" color="warning">
        <QuickreplyIcon sx={{ fontSize: { md: '3rem', xs: '2.5rem' } }} />
      </IconButton>
    </Tooltip>
  );
};
export default Chat;
