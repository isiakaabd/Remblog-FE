import { IconButton } from '@mui/material';
import QuickreplyIcon from '@mui/icons-material/QuickreplyOutlined';
import CustomToolTip from 'components/CustomToolTip';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useNavigate } from 'react-router-dom';

interface ChatProp {
  handleClick: () => void;
  iconSize?: string;
}
const Chat: FC<ChatProp> = ({ handleClick, iconSize }) => {
  let size = iconSize === 'small' ? true : false;
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const handle = (): void => navigate('/auth/login');
  return (
    <CustomToolTip title="Comment">
      <IconButton onClick={user ? handleClick : handle} size={size ? 'small' : 'large'} color="warning">
        <QuickreplyIcon sx={{ fontSize: { md: size ? '1.5rem' : '3rem', xs: size ? '1.5rem' : '2.5rem' } }} />
      </IconButton>
    </CustomToolTip>
  );
};
export default Chat;
