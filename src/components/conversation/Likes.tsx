import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
import CustomToolTip from 'components/CustomToolTip';
const Likes = () => {
  const [like, setState] = useState(false);
  return (
    <CustomToolTip title={like ? 'dislike' : 'like'}>
      <IconButton onClick={() => setState(!like)} size="large" color={'error'}>
        {like ? (
          <FavoriteIcon sx={{ fontSize: { md: '3rem', xs: '2.5rem' } }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: { md: '3rem', xs: '2.5rem' } }} />
        )}
      </IconButton>
    </CustomToolTip>
  );
};

export default Likes;
