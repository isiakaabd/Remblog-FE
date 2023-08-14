import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useGetPostsQuery } from 'redux/api/postQuery/query';
import StarBorder from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemIcon } from '@mui/material';
import LoadingAnimation from 'components/LoadingComponent';
import { modeValue } from 'utils';

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

            const host = modeValue + image;
            return (
              <ListItemButton component={Link} to={`/post/${id}`} key={id}>
                <ListItem key={index} alignItems="flex-start" dense>
                  <ListItemIcon>
                    <StarBorder fontSize="large" />
                  </ListItemIcon>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      src={host}
                      sx={{ width: 80, mr: 2, height: 80 }}
                      alt={author?.username}
                      imgProps={{ crossOrigin: 'anonymous' }}
                    />
                    {/* B
              </Avatar> */}
                  </ListItemAvatar>
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      fontSize: { md: '1.8rem', xs: '1.4rem', sm: '1.6rem' },
                      fontWeight: 600,
                    }}
                    secondary={
                      <Typography
                        sx={{ display: 'inline', fontSize: '1.3rem', fontWeight: 500 }}
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
