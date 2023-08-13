import { Grid, Typography } from '@mui/material';
import CustomButton from 'components/CustomButton';
import { Formik, Form, FormikHelpers } from 'formik/dist';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContent } from 'react-toastify';
import { useLoginMutation } from 'redux/api/authSlice';
import { getUserDetails } from 'redux/auth/auth.reducers';
import { useAppDispatch } from 'redux/store';
import FormikControl from 'validation/FormikControl';
import { LoginSchema } from 'validation/ValidationSchema';
const Login = () => {
  const [login, { isLoading: loading }] = useLoginMutation();
  type initialValuesTypes = {
    username: string;
    password: string;
    // Other form fields...
  };
  const initialValues: initialValuesTypes = {
    username: '',
    password: '',
  };

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: initialValuesTypes, { resetForm }: FormikHelpers<initialValuesTypes>) => {
    const { username, password } = values;
    // const { error, data }
    const response = await login({ username, password });

    if ('data' in response) {
      toast.success('Login Successful');

      dispatch(getUserDetails(response.data));
      const { from } = location.state || { from: { pathname: '/home' } }; // Change the default pathname if needed

      navigate(from);
      setTimeout(() => resetForm(), 2000);
    } else {
      if ('error' in response) {
        const message = response.error;
        toast.error(message as ToastContent);
      }
    }
  };
  return (
    <Grid item container justifyContent={'center'} py={3} gap={6}>
      <Typography variant="h2" textAlign={'center'} gutterBottom>
        Login
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

              <Grid item sx={{ ml: 'auto', mt: 1 }}>
                <Typography
                  component={Link}
                  color={'secondary'}
                  to="/auth/forgot-password"
                  sx={{ textDecoration: 'none' }}
                >
                  Forgot Password ?
                </Typography>
              </Grid>
            </Grid>
            <Grid item container mt={2}>
              <CustomButton title={'Submit'} isSubmitting={loading} type="submit" />
            </Grid>
            <Typography textAlign={'center'} mt={2} fontWeight={500}>
              New Here?{' '}
              <Link
                to="/auth/signup"
                color="info"
                style={{
                  textDecoration: 'none',
                }}
              >
                Create an Account
              </Link>
            </Typography>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default Login;
