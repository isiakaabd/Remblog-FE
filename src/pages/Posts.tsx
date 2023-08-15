import { Typography, Grid, Chip, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { useGetPostsQuery } from 'redux/api/postQuery/query';
import StarBorder from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemIcon } from '@mui/material';
import LoadingAnimation from 'components/LoadingComponent';
import { modeValue, selectColor } from 'utils';
import { useState, FC, useLayoutEffect } from 'react';

export default function Posts() {
  const { data, isLoading } = useGetPostsQuery({});

  if (!data || isLoading) return <LoadingAnimation />;

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }} dense>
        {data?.posts?.length > 0 ? (
          data?.posts?.map((post, index: number) => {
            const { author, image, title, _id: id, message, category } = post;

            const host = modeValue + image;
            return (
              <ListItemButton component={Link} to={`/post/${id}`} key={id}>
                <ListItem key={index} alignItems="flex-start" dense>
                  <ListItemIcon sx={{ minWidth: '4rem' }}>
                    <StarBorder fontSize="large" />
                  </ListItemIcon>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      src={host}
                      sx={{ width: '10rem', mt: 0, mr: 2, minHeight: '10rem' }}
                      alt={author?.username}
                      imgProps={{ crossOrigin: 'anonymous' }}
                    />
                    {/* B
              </Avatar> */}
                  </ListItemAvatar>
                  <Text title={title} message={message} category={category} />
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
interface TextProps {
  title: string;
  message: string;
  category: string;
}
const Text: FC<TextProps> = ({ title, message, category }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const maxHeight = 50;
  useLayoutEffect(() => {
    const element = document.querySelector('.overflow-text');

    if (element && element.scrollHeight > maxHeight) {
      setIsOverflowing(true);
    }
  }, [maxHeight]);
  return (
    <ListItemText
      primary={
        <Grid item container flexDirection={'column'}>
          <Grid item>
            <Chip label={category} color={selectColor(category)} sx={{ fontSize: { md: '1.6rem', xs: '1.2rem' } }} />
          </Grid>

          <Typography
            sx={{
              fontWeight: 600,
              maxWidth: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            fontSize={{ md: '2rem', xs: '1.4rem', sm: '1.6rem' }}
          >
            {title}
          </Typography>
        </Grid>
      }
      primaryTypographyProps={{
        maxWidth: '100%',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      secondary={
        <Typography
          dangerouslySetInnerHTML={{ __html: message }}
          component="span"
          variant="body2"
          color="text.primary"
          className={isOverflowing ? 'overflow-text' : ''}
          // variant="body1"
          sx={{
            fontSize: { md: '1.8rem', sm: '1.5rem', xs: '1.4rem' },
            fontWeight: 500,
            overflow: 'hidden',
            textAlign: 'justify',
            maxHeight: isOverflowing ? maxHeight : 'none',
            // overflow: isOverflowing ? 'hidden' : 'auto',
            textOverflow: isOverflowing ? 'ellipsis' : 'clip',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        />
      }
    />
  );
};
