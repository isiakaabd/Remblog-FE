import Chat from './conversation/Chat';
import Likes from './conversation/Likes';
import ViewCounts from './conversation/ViewCounts';
import Share from './conversation/Share';
import { FC } from 'react';
import { Grid } from '@mui/material';
interface Prop {
  handleClick: () => void;
  iconSize?: string;
}
const ChatInterface: FC<Prop> = ({ handleClick, iconSize }) => {
  return (
    <Grid item container justifyContent={'space-between'} flexWrap={'nowrap'}>
      <Chat handleClick={handleClick} iconSize={iconSize} />
      <Likes iconSize={iconSize} />
      <Share iconSize={iconSize} />
      <ViewCounts iconSize={iconSize} />
    </Grid>
  );
};

export default ChatInterface;
