import { Grid, Typography, IconButton, MenuItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDeletePostMutation, useLikePostMutation } from 'redux/api/postQuery/mutation';
import { useGetPostQuery } from 'redux/api/postQuery/query';
import { useState, MouseEvent } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicMenu from 'components/Menu';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ToastContent, toast } from 'react-toastify';
import LoadingAnimation from 'components/LoadingComponent';
import { formatDate, modeValue } from 'utils';
import ImageComponent from 'components/ImageComponent';
const Post = () => {
  const { id } = useParams();
  const [deletePost, { isLoading: deleting }] = useDeletePostMutation();
  const [likePost, { isLoading: liking }] = useLikePostMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { user } = useSelector((state: RootState) => state.auth);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data: post, isLoading } = useGetPostQuery(id);
  if (isLoading) return <LoadingAnimation />;

  const { title, _id: postId, liked, canModify, image, message, author, createdAt } = post;
  const handleDeletePost = async () => {
    try {
      const response = await deletePost(postId);
      if ('data' in response) {
        toast.success(response.data as ToastContent);
      }
      setTimeout(handleClose, 2000);
    } catch (error) {
      if (error instanceof Error && 'message' in error) {
        toast.success(error.message as ToastContent);
      }
    }
  };

  const handleLikePost = async () => {
    try {
      const response = await likePost(postId);
      if ('data' in response) {
        toast.success(response.data as ToastContent);
      }
      setTimeout(handleClose, 2000);
    } catch (error) {
      if (error instanceof Error && 'message' in error) {
        toast.success(error.message as ToastContent);
      }
    }
  };
  const host = modeValue + image;
  return (
    <>
      <Grid item xs={10} md={8} sx={{ marginX: 'auto', py: 4 }}>
        <Grid item container flexDirection={'column'}>
          <Grid item container flexWrap="nowrap">
            <Typography variant="h4" gutterBottom flex={1}>
              Author:
              <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '2rem', fontWeight: 600 }}>
                {author?.username}
              </Typography>{' '}
            </Typography>
            {user && (
              <Grid item>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon fontSize="large" />
                </IconButton>
              </Grid>
            )}
          </Grid>
          <Grid item container>
            <Typography variant="h3" gutterBottom>
              {' '}
              {title}
            </Typography>
          </Grid>
          <Grid item container>
            <ImageComponent src={host} alt={author?.username} />

            <Typography variant="h6" mt={1} fontWeight={600} gutterBottom>
              Posted on: {formatDate(createdAt)}
              <Typography variant="h6" fontWeight={500} mt={1} gutterBottom></Typography>
            </Typography>
          </Grid>

          <Grid item container mt={2}>
            <Typography variant="h6" dangerouslySetInnerHTML={{ __html: message }} />
          </Grid>
        </Grid>
      </Grid>
      <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose}>
        {canModify && <MenuItem onClick={handleDeletePost}>{deleting ? 'Deleting' : 'Delete Post'}</MenuItem>}
        <MenuItem onClick={handleLikePost}>{liking ? 'Loading' : liked ? 'Disliked Post' : 'Like Post'}</MenuItem>
      </BasicMenu>
    </>
  );
};

export default Post;
