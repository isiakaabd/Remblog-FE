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

import { MoreVertOutlined, Edit, ReportOutlined, PersonAddOutlined, Delete } from '@mui/icons-material';

const Chat: FC<ChatProps> = ({ item }) => {
  console.log(item);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: any) => {
    e.stopPFRropagation();
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e: MouseEvent): void => {
    e.stopPropagation();
    setAnchorEl(null);
  };
  const check = false;
  const admin = false;
  return (
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
    >
      <ListItemButton disableRipple disableTouchRipple dense>
        <ListItemAvatar>
          <Avatar alt={'full_name'} sx={{ cursor: 'pointer' }}></Avatar>
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
                    {'user?.full_name'}
                  </Typography>
                  <Typography variant="body2" fontWeight={400} sx={{ ml: 1 }} noWrap>
                    12:00pm
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
                  // sx={{ visibility: !check && "hidden"}}
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
                  {!check && (
                    <MenuItem
                      // onClick={handleDeleteComment}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      disabled={check}
                    >
                      <ListItemIcon>
                        <Delete sx={{ fontSize: '2rem' }} />
                      </ListItemIcon>

                      <ListItemText sx={{ fontSize: '3rem' }}>{'Delete'}</ListItemText>
                    </MenuItem>
                  )}
                  {!check && (
                    <MenuItem
                      // onClick={handleEditComment}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      disabled={check}
                    >
                      <ListItemIcon>
                        <Edit sx={{ fontSize: '2rem' }} />
                      </ListItemIcon>

                      <ListItemText sx={{ fontSize: '3rem' }}>Edit</ListItemText>
                    </MenuItem>
                  )}
                  {check && !admin && (
                    <MenuItem
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      onClick={(e) => {
                        // setOpenReport(true);
                        handleClose(e);
                      }}
                    >
                      <ListItemIcon>
                        <ReportOutlined sx={{ fontSize: '2rem' }} />
                      </ListItemIcon>
                      <ListItemText>Report</ListItemText>
                    </MenuItem>
                  )}

                  {check && (
                    <MenuItem
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      // onClick={handleFollowUser}
                    >
                      <ListItemIcon>
                        <PersonAddOutlined sx={{ fontSize: '2rem' }} />
                      </ListItemIcon>
                      <ListItemText>{'Following'}</ListItemText>
                    </MenuItem>
                  )}
                </Menu>
              </Grid>
            </Grid>
          }
          secondary={<div>Heloo</div>}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default Chat;
