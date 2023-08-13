import { Button } from '@mui/material';
import Loader from './Loader';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { CustomButtonProp } from './type';
const CustomButton: FC<CustomButtonProp> = ({ isSubmitting, title, ...rest }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        lineHeight: 1.5,
        fontWeight: 600,
        textTransform: 'capitalize',
        color: theme.palette.primary.main,
        fontSize: { md: '1.6rem', xs: '1.4rem' },
        width: '100%',
        py: '.5em',
        backgroundColor: theme.palette.secondary.main,
      }}
      variant="contained"
      size="small"
      {...rest}
    >
      {!isSubmitting && title}

      {isSubmitting && <Loader size={20} color="info" />}
    </Button>
  );
};

export default CustomButton;
