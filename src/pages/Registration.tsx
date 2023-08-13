import { Grid, Typography } from '@mui/material';
import CustomButton from 'components/CustomButton';
import { Formik, Form, FormikHelpers } from 'formik/dist';
import { Link } from 'react-router-dom';
import { toast, ToastContent } from 'react-toastify';
import { useRegisterMutation } from 'redux/api/authSlice';
import FormikControl from 'validation/FormikControl';
import { LoginSchema } from 'validation/ValidationSchema';
const Registration = () => {
  const [register, { isLoading: loading }] = useRegisterMutation();
  type initialValuesTypes = {
    username: string;
    password: string;
    // Other form fields...
  };
  const initialValues: initialValuesTypes = {
    username: '',
    password: '',
  };
  const handleSubmit = async (values: initialValuesTypes, { resetForm }: FormikHelpers<initialValuesTypes>) => {
    const { username, password } = values;

    // const { error, data }
    const response = await register({ username, password });
    if ('data' in response) {
      toast.success(response.data);
      setTimeout(() => resetForm(), 2000);
    }
    if ('error' in response) {
      const message = response.error;
      toast.error(message as ToastContent);
    }
  };
  return (
    <Grid item container justifyContent={'center'} py={3} gap={6}>
      <Typography variant="h2" textAlign={'center'} gutterBottom>
        Register
      </Typography>
      <Grid item container>
        <Formik validationSchema={LoginSchema} initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Grid item container>
              <Grid item container mb={3}>
                <FormikControl name="username" placeholder="Username" />
              </Grid>
              <Grid item container>
                <FormikControl name="password" type="password" placeholder="Password" />
              </Grid>
            </Grid>
            <Grid item container mt={2}>
              <CustomButton title={'Submit'} isSubmitting={loading} type="submit" />
            </Grid>
            <Typography textAlign={'center'} mt={2} fontWeight={500}>
              Already have an account?{' '}
              <Link
                to="/auth/login"
                color="info"
                style={{
                  textDecoration: 'none',
                }}
              >
                Login here
              </Link>
            </Typography>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default Registration;
