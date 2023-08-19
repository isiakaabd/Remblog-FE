import { Grid } from '@mui/material';
import CustomButton from 'components/CustomButton';
import { Formik, Form, FormikHelpers } from 'formik';
import FormikControl from 'validation/FormikControl';
interface initialValuesProps {
  message: string;
}
const ConversationModal = () => {
  const initialValues: initialValuesProps = {
    message: '',
  };
  const handleSubmit = (values: initialValuesProps, { resetForm }: FormikHelpers<initialValuesProps>) => {
    console.log(values);
    resetForm();
  };
  return (
    <Grid item container height={'100%'}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form style={{ width: '100%', height: '100%' }}>
          <Grid item container gap={3} height={'100%'}>
            <Grid item container>
              <FormikControl name="message" control="textarea" />
            </Grid>
            <Grid item container mt="auto">
              <CustomButton title="Submit" />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
};

export default ConversationModal;
