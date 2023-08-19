import { IconButton } from '@mui/material';
import QuickreplyIcon from '@mui/icons-material/QuickreplyOutlined';
import CustomToolTip from 'components/CustomToolTip';
import { FC } from 'react';

interface ChatProp {
  handleClick: () => void;
}
const Chat: FC<ChatProp> = ({ handleClick }) => {
  return (
    <CustomToolTip title="Commen">
      <IconButton onClick={handleClick} size="large" color="warning">
        <QuickreplyIcon sx={{ fontSize: { md: '3rem', xs: '2.5rem' } }} />
      </IconButton>
    </CustomToolTip>
  );
};
export default Chat;
