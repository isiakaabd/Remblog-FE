import { IconButton } from '@mui/material';
import QuickreplyIcon from '@mui/icons-material/QuickreplyOutlined';
import CustomToolTip from 'components/CustomToolTip';
import { FC } from 'react';

interface ChatProp {
  handleClick: () => void;
  iconSize?: string;
}
const Chat: FC<ChatProp> = ({ handleClick, iconSize }) => {
  let size = iconSize === 'small' ? true : false;
  return (
    <CustomToolTip title="Comment">
      <IconButton onClick={handleClick} size={size ? 'small' : 'large'} color="warning">
        <QuickreplyIcon sx={{ fontSize: { md: size ? '1.5rem' : '3rem', xs: size ? '1.5rem' : '2.5rem' } }} />
      </IconButton>
    </CustomToolTip>
  );
};
export default Chat;
