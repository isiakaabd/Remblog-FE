import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4Outlined';
import Brightness7Icon from '@mui/icons-material/Brightness7Outlined';
import { Box, Toolbar, IconButton, CssBaseline, Typography, Grid, Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { FC } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { RootState, useAppDispatch } from 'redux/store';
import CustomButton from './CustomButton';
import { useLogoutMutation } from 'redux/api/authSlice';
import { toast, ToastContent } from 'react-toastify';
import { getUserDetails } from 'redux/auth/auth.reducers';
import { useContext } from 'react';
import { ColorModeContext } from 'routes/AppRoutes';
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

  const handleLogout = async (): Promise<void> => {
    const response = await logout({});
    if ('data' in response) {
      const message = response.data;
      toast.success(message as ToastContent);
    }
    dispatch(getUserDetails(null));
  };
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} sx={{ shadow: 0, py: 1, bgcolor: 'Background.default' }}>
        <Toolbar>
          <Grid
            item
            container
            alignItems="center"
            flexWrap={{ md: 'nowrap' }}
            gap={{ md: 4 }}
            flexDirection={{ md: 'row', xs: 'column' }}
            justifyContent="space-between"
          >
            <Grid item container>
              <Typography
                variant="h3"
                flex={1}
                sx={{ textDecoration: 'none', color: 'inherit' }}
                component={Link}
                to="/"
              >
                REMBLOG
              </Typography>
              <Grid item>
                {user ? (
                  <Button
                    variant="text"
                    color="secondary"
                    to="/post/create"
                    sx={{ fontSize: '1.2rem' }}
                    component={Link}
                  >
                    Create Post
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    color="secondary"
                    to="/auth/login"
                    component={Link}
                    sx={{ color: 'inherit', fontSize: '1.4rem' }}
                  >
                    Login
                  </Button>
                )}
              </Grid>
              <Mode />
            </Grid>
            {user && (
              <Grid item container>
                <Grid item container gap={3} sx={{ justifyContent: { md: 'space-between' } }} alignItems={'center'}>
                  <Typography variant="body2" flex={1}>
                    <Typography variant="body2">Welcome</Typography> {user?.username}
                  </Typography>
                  <Grid item>
                    <CustomButton title="Logout" disabled={isLoading} onClick={handleLogout} />
                  </Grid>
                </Grid>
              </Grid>
            )}
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
        <Toolbar />
        <Toolbar />
        <Grid item container sx={{ minHeight: '100vh' }}>
          <Outlet />
        </Grid>
      </Box>
    </Box>
  );
};

const Mode = () => {
  const theme: Theme = useTheme();

  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
export default Drawer;
