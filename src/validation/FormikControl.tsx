import { FC } from 'react';
import Input from './Input';
import { FormikControlProps } from './types';
import Editor from './Editor';
import Files from './Files';

const FormikControl: FC<FormikControlProps> = ({ control, name, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input name={name} {...rest} />;
    case 'textarea':
      return <Editor name={name} {...rest} />;
    case 'file':
      return <Files name={name} {...rest} />;
    default:
      return null;
  }
};

FormikControl.defaultProps = {
  control: 'input',
};
export default FormikControl;
