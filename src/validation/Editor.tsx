import { Field, ErrorMessage, useFormikContext, FieldProps } from 'formik/dist';
import ReactQuill from 'react-quill';
import { FC } from 'react';
import { Grid } from '@mui/material';
import TextError from './TextError';

interface Props {
  name: string;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];
type FormValues = {
  [key: string]: string;
};
const Editor: FC<Props> = ({ name, ...rest }) => {
  const { errors, touched } = useFormikContext<FormValues>();

  return (
    <Grid item container flexDirection={'column'} gap={5}>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <Quill name={name} field={field} {...rest} error={!!errors[name] && touched[name]} />
        )}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

const Quill: FC<{ name: string; error?: boolean; field: FieldProps['field'] }> = ({ name, field, error, ...rest }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (value: string) => {
    setFieldValue(name, value);
  };
  return (
    <ReactQuill
      value={field.value}
      onChange={handleChange}
      theme="snow"
      modules={modules}
      formats={formats}
      style={{ width: '100%', borderColor: error ? 'red' : undefined }}
      {...rest}
    />
  );
};

export default Editor;
