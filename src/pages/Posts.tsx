import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useGetPostsQuery } from 'redux/api/postQuery/query';
import { Link } from 'react-router-dom';
import { ListItemButton } from '@mui/material';

interface PostsProp {
  _id: string;
  author: { _id: string; username: string };
  createdAt: string;
  image?: string;
  message: string;
  title: string;
}
export default function Posts() {
  const { data: posts, isLoading } = useGetPostsQuery({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }} dense>
        {posts?.length > 0 ? (
          posts?.map((post: PostsProp, index: number) => {
            const { author, image, title, _id: id, message } = post;

            const filePathWithForwardSlash = image?.replace(/\\/g, '/');
            const host = 'http://localhost:2023/' + filePathWithForwardSlash;

            return (
              <>
                {/* 
              @ts-ignore */}
                <ListItemButton component={Link} to={`/post/${id}`}>
                  <ListItem
                    key={index}
                    alignItems="flex-start"
                    dense
                    // secondaryAction={

                    // }
                  >
                    <ListItemAvatar>
                      <Avatar alt={author?.username} src={host} />
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
              </>
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
