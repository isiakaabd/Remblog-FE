import { Grid } from '@mui/material';
import CustomButton from 'components/CustomButton';
import { Formik, Form, FormikHelpers } from 'formik';
import { useCreatePostMutation } from 'redux/api/postQuery/mutation';
import FormikControl from 'validation/FormikControl';
import { CreatePostSchema } from 'validation/ValidationSchema';
import { toast, ToastContent } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
interface Values {
  title: string;
  image: string;
  message: string;
}
const CreatePost = () => {
  const [createPost, { isLoading }] = useCreatePostMutation();
  const navigate = useNavigate();
  const handleSubmit = async (values: Values, { resetForm }: FormikHelpers<Values>) => {
    const { message, image, title } = values;

    const form = new FormData();
    form.append('title', title);
    form.append('message', message);
    form.append('image', image[0]);
    const response = await createPost(form);
    setTimeout(() => resetForm(), 2000);
    setTimeout(() => navigate('/home'), 2100);
    if ('data' in response) {
      const message = response.data;
      toast.success(message as ToastContent);
    }
  };

  const initialValues = { title: '', message: '', image: '' };
  return (
    <Grid item md={8} xs={12} sm={10} sx={{ py: 4, margin: 'auto' }}>
      <Grid item container>
        <Formik initialValues={initialValues} validationSchema={CreatePostSchema} onSubmit={handleSubmit}>
          <Form>
            <Grid item container gap={4}>
              <Grid item container>
                <FormikControl name="title" placeholder="Title" />
              </Grid>
              <Grid item container>
                <FormikControl name="message" control="textarea" placeholder="Message" />
              </Grid>
              <Grid item container mt={5}>
                <FormikControl name="image" control="file" />
              </Grid>
              <Grid item container mt={5}>
                <CustomButton title="Submit" type="submit" isSubmitting={isLoading} />
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
