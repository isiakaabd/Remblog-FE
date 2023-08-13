import { Grid } from '@mui/material';
import { useFormikContext } from 'formik/dist';
import { useDropzone } from 'react-dropzone';
import { Field, ErrorMessage } from 'formik/dist';
import { FC } from 'react';
import TextError from './TextError';
import { InputProps } from './types';
interface Prop {
  name: string;
}
const Dropzone: FC<Prop> = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.gif'],
    },
    onDrop: (acceptedFiles) => {
      setFieldValue(name, acceptedFiles);
    },
  });

  return (
    <Grid item container {...getRootProps()} sx={{ border: '2px dashed #ccc', padding: '20px' }}>
      <input {...getInputProps()} type="file" />
      <p>Drag and drop some files here, or click to select files</p>
    </Grid>
  );
};

const Files = (props: InputProps) => {
  const { name, ...rest } = props;
  return (
    <Grid container direction="column">
      <Field {...rest} name={name} as={Dropzone} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

export default Files;
