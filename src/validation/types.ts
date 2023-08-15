import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps } from '@mui/material/TextField';

export interface InputProps
  extends Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, 'variant'> {
  placeholder?: string;
  name: string;
  countError?: boolean;
  options?: Array<Options>;
}
interface Options {
  key: string;
  value: string;
}
export interface SelectProps extends SelectInputProps {
  options: Array<Options>;
  placeholder?: string;
  name: string;
}

export interface FormikControlProps extends InputProps {
  control?: 'input' | 'textarea' | 'select' | 'file';
}
