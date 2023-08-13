import Lottie from 'lottie-react';
import animationData from 'assets/animation_ll9cfvkm.json'; // Replace with your animation JSON
import { Grid } from '@mui/material';
const LoadingAnimation = () => {
  return (
    <Grid
      item
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <Lottie animationData={animationData} loop autoplay style={{ width: 200, height: 200 }} />
      <h2 style={{ color: 'white', marginTop: '20px' }}>Remblog</h2>
    </Grid>
  );
};

export default LoadingAnimation;
