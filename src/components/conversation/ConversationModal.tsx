import { Grid } from '@mui/material';
import CustomButton from 'components/CustomButton';
import { Formik, Form, FormikHelpers } from 'formik';
import { initialValuesProps } from 'pages/Post';
import { FC } from 'react';
import { useCreateCommentMutation } from 'redux/api/comments/mutation';
import FormikControl from 'validation/FormikControl';
import { toast, ToastContent } from 'react-toastify';
interface ConversationModalProps {
  initialValues: initialValuesProps;
  handleClose: () => void;
}
const ConversationModal: FC<ConversationModalProps> = ({ initialValues, handleClose }) => {
  const [createComment, { data, isLoading }] = useCreateCommentMutation();
  const handleSubmit = async (values: initialValuesProps, { resetForm }: FormikHelpers<initialValuesProps>) => {
    try {
      const params = {
        message: values.message,
        postId: values.postId,
      };
      await createComment(params);
      toast.success('Post Created' as ToastContent);
      resetForm();
      console.log(data);
      setTimeout(() => handleClose(), 500);
    } catch (error: any) {
      const message = error.data;
      toast.error(message as ToastContent);
    }
  };

  return (
    <Grid item container height={'100%'}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
        <Form style={{ width: '100%', height: '100%' }}>
          <Grid item container gap={3} height={'100%'}>
            <Grid item container>
              <FormikControl name="message" control="textarea" placeholder="Comment" />
            </Grid>
            <Grid item container mt="auto">
              <CustomButton title="Submit" type="submit" isSubmitting={isLoading} />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
};

export default ConversationModal;
