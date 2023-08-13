import { Avatar, Grid, Typography, IconButton, MenuItem } from '@mui/material';
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
  const { title, _id: postId, liked, canModify, image, message, author, created_at } = post;
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
    const data = await likePost(postId);
    console.log(data);
    setTimeout(() => handleClose(), 2000);
  };

  return (
    <>
      <Grid item container flexDirection={'column'}>
        <Grid item container justifyContent={'space-between'}>
          <Grid item>
            <Avatar src={image} />
          </Grid>
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
                <MoreVertIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
        <Grid item container flexDirection={'column'}>
          <Typography>Title: {title}</Typography>
          <Typography>Author:{author?.username}</Typography>
          <Typography>Created on:{created_at}</Typography>
        </Grid>
        <Grid item container>
          <Typography variant="body1">{message}</Typography>
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
