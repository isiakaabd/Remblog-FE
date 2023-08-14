import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FC } from 'react';
import { ImageComponentProps } from './type';
import { Avatar } from '@mui/material';
const ImageComponent: FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <Avatar
          src={src}
          sx={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: { md: '60vh', xs: '40vh' } }}
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
