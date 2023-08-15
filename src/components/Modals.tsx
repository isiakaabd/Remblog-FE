import { Dialog, IconButton, DialogContent, DialogTitle } from '@mui/material';
import { ReactNode } from 'react';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import CloseIcon from '@mui/icons-material/CloseOutlined';
interface ModalProps {
  isOpen: boolean;
  title: string;
  handleClose: () => void;
  children: ReactNode;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Modals = ({ isOpen, title, handleClose, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md" scroll="body" TransitionComponent={Transition}>
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
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

Modals.defaultProps = {
  height: 'auto',
};

export default Modals;
