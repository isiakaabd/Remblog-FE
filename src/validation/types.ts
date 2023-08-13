import { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps } from '@mui/material/TextField';

export interface InputProps
  extends Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, 'variant'> {
  placeholder?: string;
  name: string;
}

export interface FormikControlProps extends InputProps {
  control?: string;
}
