import { ButtonProps, PopoverProps } from '@mui/material';
import { ReactNode } from 'react';
export interface CustomButtonProp extends ButtonProps {
  isSubmitting?: boolean;
  title: string;
}
export interface LoaderProp {
  color?: string;
  size?: number;
}
export interface BasicMenuProp {
  anchorEl: PopoverProps['anchorEl'];
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}
