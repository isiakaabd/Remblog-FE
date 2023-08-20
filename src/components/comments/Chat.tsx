import { FC, MouseEvent, useState } from 'react';
import { ChatProps } from './types';
import {
  ListItem,
  Menu,
  MenuItem,
  ListItemButton,
  ListItemAvatar,
  ListItemIcon,
  Avatar,
  Grid,
  ListItemText,
  Typography,
  IconButton,
} from '@mui/material';

import { MoreVertOutlined, Edit, ReportOutlined, Delete } from '@mui/icons-material';
import { getTimeMoment } from 'utils';
import ChatInterface from 'components/ChatInterface';
import Modals from 'components/Modals';
import ConversationModal from 'components/conversation/ConversationModal';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useDeleteCommentMutation } from 'redux/api/comments/mutation';

import { toast, ToastContent } from 'react-toastify';

const Chat: FC<ChatProps> = ({ comment }) => {
  const {
    message,
    createdAt,
    _id: commentId,
    sender: { username, _id: userId },
  } = comment;
  const { user } = useSelector((state: RootState) => state.auth);
  const [deleteComment, { isLoading }] = useDeleteCommentMutation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const { id } = useParams();
  const EditValues = { message, id: commentId, postId: id, parentId: commentId };
  const [openConversationModal, setOpenConversationModal] = useState<boolean>(false);
  const handleOpenChat = (): void => {
    setOpenConversationModal(true);
  };
  const [edit, setEdit] = useState(false);
  const handleOpenEditModal = () => {
    setEdit(true);
    setOpenConversationModal(true);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const handleCloseConversationModal = (): void => {
    setOpenConversationModal(false);
    setEdit(false);
    handleClose();
  };
  const intialValues = { message: '', postId: id, parentId: commentId };
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleDeleteComment = async (e: MouseEvent): Promise<void> => {
    e.stopPropagation();
    try {
      const response = await deleteComment({ id: commentId });
      if ('data' in response) {
        toast.success(response.data as ToastContent);
      }
      setTimeout(() => handleClose(), 200);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const check = user?._id === userId;

  return (
    <>
      <ListItem
        disablePadding
        disableGutters={true}
        sx={{
          '& .MuiListItemText-root': {
            m: 0,
            pr: { md: 2, xs: 1 },
          },
          textDecoration: 'none',
          color: 'text.primary',
        }}
        alignItems="flex-start"
      >
        <ListItemButton disableRipple disableTouchRipple dense>
          <ListItemAvatar>
            <Avatar alt={username} sx={{ cursor: 'pointer' }}>
              {username.slice(0, 1).toUpperCase()}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            sx={{ p: '0 !important' }}
            primary={
              <Grid item container alignItems={'center'} flexWrap={'nowrap'}>
                <Grid item flex={1} sx={{ maxWidth: '90%', mr: 'auto' }}>
                  <Grid item alignItems={'center'} container flexWrap={'nowrap'}>
                    <Typography
                      fontWeight={700}
                      noWrap
                      sx={{ maxWidth: '90%' }}
                      color="color.text"
                      fontSize={{ md: '1.8rem', xs: '1.4rem' }}
                    >
                      {username}
                    </Typography>
                    <Typography variant="body2" fontWeight={400} sx={{ ml: 1 }} noWrap>
                      {getTimeMoment(createdAt)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton
                    edge="start"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ ml: { xs: '1rem' } }}
                  >
                    <MoreVertOutlined />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    {check && (
                      <MenuItem
                        onClick={handleDeleteComment}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <ListItemIcon>
                          <Delete sx={{ fontSize: '2rem' }} />
                        </ListItemIcon>

                        <ListItemText sx={{ fontSize: '3rem' }}>{isLoading ? 'Deleting' : 'Delete'}</ListItemText>
                      </MenuItem>
                    )}
                    {check && (
                      <MenuItem
                        onClick={handleOpenEditModal}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <ListItemIcon>
                          <Edit sx={{ fontSize: '2rem' }} />
                        </ListItemIcon>

                        <ListItemText sx={{ fontSize: '3rem' }}>Edit</ListItemText>
                      </MenuItem>
                    )}
                    {!check && (
                      <MenuItem
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        onClick={handleClose}
                      >
                        <ListItemIcon>
                          <ReportOutlined sx={{ fontSize: '2rem' }} />
                        </ListItemIcon>
                        <ListItemText>Report</ListItemText>
                      </MenuItem>
                    )}
                  </Menu>
                </Grid>
              </Grid>
            }
            secondary={
              <Grid item container>
                <Typography variant="h5" dangerouslySetInnerHTML={{ __html: message }} />
                <ChatInterface handleClick={handleOpenChat} iconSize="small" />
              </Grid>
            }
          />
        </ListItemButton>
      </ListItem>
      <Modals
        isOpen={openConversationModal}
        title={`${edit ? 'Edit' : 'Add'} Response`}
        handleClose={handleCloseConversationModal}
      >
        <ConversationModal
          initialValues={edit ? EditValues : intialValues}
          handleClose={handleCloseConversationModal}
          type={edit ? 'edit' : 'add'}
        />
      </Modals>
    </>
  );
};

export default Chat;
