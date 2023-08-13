import { styled } from '@mui/material/styles';

import { Box, Toolbar, CssBaseline, Typography, Grid, Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { FC } from 'react';
import { RootState, useAppDispatch } from 'redux/store';
import CustomButton from './CustomButton';
import { useLogoutMutation } from 'redux/api/authSlice';
import { toast } from 'react-toastify';
import { getUserDetails } from 'redux/auth/auth.reducers';
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  bgcolor: 'background.default',
  color: 'color.default',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer: FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const [logout, { isLoading }] = useLogoutMutation();
  if (!user) return;
  const { username } = user;
  const handleLogout = async (): Promise<void> => {
    const { data: message } = await logout({});
    if (message) toast.success(message);
    dispatch(getUserDetails(null));
  };
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} sx={{ shadow: 0, py: 1, bgcolor: 'Background.default' }}>
        <Toolbar>
          <Grid item container justifyContent="space-between">
            <Typography variant="h4" sx={{ textDecoration: 'none', color: 'inherit' }} component={Link} to="/posts">
              REMBLOG
            </Typography>
            {user ? (
              <Button variant="text" color="secondary" to="/post/create" component={Link}>
                Create Post
              </Button>
            ) : null}
            <Grid item>
              <Grid item container gap={3} alignItems={'center'}>
                <Typography variant="body2">
                  <Typography variant="body2">Welcome</Typography> {username}
                </Typography>
                <Grid item>
                  <CustomButton title="Logout" disabled={isLoading} onClick={handleLogout} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          height: '100%',
          width: '100%',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
        }}
      >
        <Grid item container sx={{ minHeight: '100vh', mt: '6rem' }}>
          <Outlet />
        </Grid>
      </Box>
    </Box>
  );
};
export default Drawer;
