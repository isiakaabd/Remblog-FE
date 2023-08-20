import { FC } from 'react';
import Chat from './Chat';
import { List, Grid } from '@mui/material';
import Loader from 'components/Loader';
import Empty from 'components/Empty';
import { useParams } from 'react-router-dom';
import { useGetCommentsQuery } from 'redux/api/comments/query';

const Comments: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCommentsQuery(id);
  if (isLoading && !data) return <Loader />;

  if (!data) return <Empty />;
  return (
    <Grid item container>
      <List dense sx={{ width: '100%' }}>
        {data.comments.map((comment) => (
          <Chat key={comment._id} comment={comment} />
        ))}
      </List>
    </Grid>
  );
};

export default Comments;
