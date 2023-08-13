import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});
export const CreatePostSchema = Yup.object({
  title: Yup.string().required('Required'),
  message: Yup.string().test('is-non-default', 'Required', (value) => value !== '<p><br></p>'),
  image: Yup.mixed().required('A file is required'),
});
