import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FC } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { ImageComponentProps } from './type';
import { Avatar } from '@mui/material';
const ImageComponent: FC<ImageComponentProps> = ({ src, alt, host }) => {
  const theme: Theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <PhotoProvider
      speed={() => 800}
      easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
    >
      <PhotoView src={src ? src : host}>
        <Avatar
          src={src ? src : host}
          color="secondary"
          sx={{
            '&.MuiAvatar-root': {
              color: mode === 'light' ? theme.palette.primary.light : theme.palette.primary.main,
            },
            objectFit: 'cover',
            minHeight: { md: '30rem', sm: '20rem', xs: '10rem' },
            width: '100%',
            fontSize: '4rem',
            height: '100%',
            maxHeight: { md: '60vh', xs: '40vh' },
          }}
          alt={alt}
          variant="rounded"
          imgProps={{ crossOrigin: 'anonymous' }}
        />
        {/* <img src={src} alt={alt} crossOrigin="anonymous" /> */}
      </PhotoView>
    </PhotoProvider>
  );
};
export default ImageComponent;
