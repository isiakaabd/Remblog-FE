import { Select, Grid, MenuItem, FormControl, InputLabel } from '@mui/material';
import { SelectProps, InputProps } from './types';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import TextError from './TextError';
import { FC } from 'react';

type FormValues = {
  [key: string]: string;
};
const ControlledOpenSelect: FC<SelectProps> = ({ placeholder, name, options, ...rest }) => {
  const { errors, touched, values } = useFormikContext<FormValues>();
  console.log(errors[name]);
  return (
    <FormControl>
      <InputLabel id={name}>{placeholder}</InputLabel>

      <Select
        labelId={name}
        id={name}
        size="small"
        sx={{ paddingY: '.4rem' }}
        label={placeholder}
        error={!!errors[name] && touched[name]}
        {...rest}
        name={name}
        // value=}
        // renderValue={(value) => value}
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option, index: number) => (
          <MenuItem key={index} value={option.value}>
            {option.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const SelectComponent = (props: InputProps) => {
  const { name, ...rest } = props;

  return (
    <Grid container direction="column">
      <Field id={name} name={name} {...rest} as={ControlledOpenSelect} />

      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default SelectComponent;
