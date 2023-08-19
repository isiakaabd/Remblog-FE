import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FC } from 'react';
import { ImageComponentProps } from './type';
import { Avatar } from '@mui/material';
const ImageComponent: FC<ImageComponentProps> = ({ src, alt, host }) => {
  return (
    <PhotoProvider
      speed={() => 800}
      easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
    >
      <PhotoView src={src ? src : host}>
        <Avatar
          src={src ? src : host}
          sx={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: { md: '60vh', xs: '40vh' } }}
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
