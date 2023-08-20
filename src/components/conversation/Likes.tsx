import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FC, useState } from 'react';
import CustomToolTip from 'components/CustomToolTip';
interface Prop {
  iconSize?: string;
}
const Likes: FC<Prop> = ({ iconSize }) => {
  const [like, setState] = useState(false);
  let size = iconSize === 'small' ? true : false;
  return (
    <CustomToolTip title={like ? 'dislike' : 'like'}>
      <IconButton onClick={() => setState(!like)} size={size ? 'small' : 'large'} color={'error'}>
        {like ? (
          <FavoriteIcon sx={{ fontSize: { md: size ? '1.5rem' : '3rem', xs: size ? '1.5rem' : '2.5rem' } }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: { md: size ? '1.5rem' : '3rem', xs: size ? '1.5rem' : '2.5rem' } }} />
        )}
      </IconButton>
    </CustomToolTip>
  );
};

export default Likes;
