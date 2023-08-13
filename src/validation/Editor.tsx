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

const Editor: FC<Props> = ({ name, ...rest }) => {
  return (
    <Grid item container flexDirection={'column'} gap={5}>
      <Field name={name}>{({ field }: FieldProps) => <Quill name={name} field={field} {...rest} />}</Field>
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

const Quill: FC<{ name: string; field: FieldProps['field'] }> = ({ name, field, ...rest }) => {
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
      style={{ width: '100%' }}
      {...rest}
    />
  );
};

export default Editor;
