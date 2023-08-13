import { Field, ErrorMessage } from 'formik/dist';
import { FC } from 'react';
import { Grid, TextField } from '@mui/material';
import TextError from './TextError';
import { InputProps } from './types';
const Text: FC<InputProps> = ({ placeholder, name, ...rest }) => {
  return <TextField id="outlined-size-normal" size="small" name={name} label={placeholder} {...rest} margin="dense" />;
};

const Input = (props: InputProps) => {
  const { name, type, ...rest } = props;
  return (
    <Grid container direction="column">
      <Field id={name} name={name} type={type ? type : 'text'} {...rest} as={Text} />

      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default Input;
