import { FC } from 'react';
import Chat from './Chat';
import { List } from '@mui/material';

const Comments: FC = () => {
  const Arr = Array(10).fill(undefined);

  return (
    <List dense sx={{ width: '100%' }}>
      {Arr.map((item, index: number) => (
        <Chat item={item} key={index} />
      ))}
    </List>
  );
};

export default Comments;
