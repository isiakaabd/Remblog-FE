import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import { AuthPage } from './AuthPage';
import { ThemeProvider } from '@emotion/react';
import { useState, useEffect, useMemo, createContext } from 'react';
import { PaletteMode, createTheme } from '@mui/material';
import getDesignTokens from 'muiTheme';
import App from 'App';
import { useGetProfileQuery } from 'redux/api/profileSlice';
import { useAppDispatch } from 'redux/store';
import { getUserDetails } from 'redux/auth/auth.reducers';
import LoadingAnimation from 'components/LoadingComponent';
import { HelmetProvider } from 'react-helmet-async';
const AppRoutes = () => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const ColorModeContext = createContext({ toggleColorMode: () => {} });
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const { data, isLoading } = useGetProfileQuery({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.success) {
      dispatch(getUserDetails(data?.data));
    }
  }, [data]);
  const helmetContext = {};
  if (isLoading) return <LoadingAnimation />;
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="container">
            <HelmetProvider context={helmetContext}>
              <Routes>
                <Route element={<App />}>
                  <Route path="/*" element={<PrivateRoutes />} />
                  <Route index element={<Navigate to="/home" />} />
                  <Route path="auth/*" element={<AuthPage />} />
                  <Route path="*" element={<Navigate to="/auth" />} />
                </Route>
              </Routes>
            </HelmetProvider>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppRoutes;
