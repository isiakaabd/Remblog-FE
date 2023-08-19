import { Slide, useMediaQuery, Dialog, IconButton, DialogContent, DialogTitle } from '@mui/material';
import { ReactNode, Ref, ReactElement, forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';

import CloseIcon from '@mui/icons-material/CloseOutlined';
interface ModalProps {
  isOpen: boolean;
  title: string;
  handleClose: () => void;
  children: ReactNode;
}
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Modals = ({ isOpen, title, handleClose, children }: ModalProps) => {
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Dialog open={isOpen} onClose={handleClose} fullScreen={fullScreen} scroll="body" TransitionComponent={Transition}>
      <DialogTitle sx={{ fontWeight: 600, fontSize: { md: '2rem', sm: '1.6rem', xs: '1.4rem' } }}>
        {title}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ height: { xs: '85vh', sm: '100%' } }}>{children}</DialogContent>
    </Dialog>
  );
};

Modals.defaultProps = {
  height: 'auto',
};

export default Modals;
