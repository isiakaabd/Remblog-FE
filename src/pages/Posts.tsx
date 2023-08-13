import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useGetPostsQuery } from 'redux/api/postQuery/query';
import { Link } from 'react-router-dom';
import { ListItemButton } from '@mui/material';
import LoadingAnimation from 'components/LoadingComponent';

export default function Posts() {
  const { data, isLoading } = useGetPostsQuery({});

  if (isLoading) return <LoadingAnimation />;
  if (!data) return;
  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }} dense>
        {data?.posts?.length > 0 ? (
          data?.posts?.map((post, index: number) => {
            const { author, image, title, _id: id, message } = post;

            const filePathWithForwardSlash = image?.replace(/\\/g, '/');

            // let mode = import.meta.env.MODE;

            // const modeValue =
            //   mode === 'development'
            //     ? import.meta.env.VITE_APP_DEVELOPMENT_URL
            //     : import.meta.env.VITE_APP_PRODUCTION_URL;

            // const host = modeValue + filePathWithForwardSlash;
            // console.log(filePathWithForwardSlash);
            return (
              <ListItemButton component={Link} to={`/post/${id}`} key={id}>
                <ListItem key={index} alignItems="flex-start" dense>
                  <ListItemAvatar>
                    <Avatar alt={author?.username} src={'/' + filePathWithForwardSlash} />
                    {/* B
              </Avatar> */}
                  </ListItemAvatar>
                  <ListItemText
                    primary={title}
                    secondary={
                      <Typography
                        sx={{ display: 'inline' }}
                        dangerouslySetInnerHTML={{ __html: message }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      />
                    }
                  />
                </ListItem>
              </ListItemButton>
            );
          })
        ) : (
          <Typography variant="h3" sx={{ width: '100%', textAlign: 'center' }} gutterBottom>
            No Posts Yet
          </Typography>
        )}
      </List>
    </>
  );
}
