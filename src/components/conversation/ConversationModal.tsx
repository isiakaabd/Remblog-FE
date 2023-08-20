import { Grid } from '@mui/material';
import CustomButton from 'components/CustomButton';
import { Formik, Form, FormikHelpers } from 'formik';
import { initialValuesProps } from 'pages/Post';
import { FC } from 'react';
import { useCreateCommentMutation, useUpdateCommentMutation } from 'redux/api/comments/mutation';
import FormikControl from 'validation/FormikControl';
import { toast, ToastContent } from 'react-toastify';
interface ConversationModalProps {
  initialValues: initialValuesProps;
  handleClose: () => void;
  type?: 'add' | 'edit';
}
const ConversationModal: FC<ConversationModalProps> = ({ initialValues, handleClose, type }) => {
  const [createComment, { isLoading }] = useCreateCommentMutation();
  const [updateComment, { isLoading: updating }] = useUpdateCommentMutation();
  const handleSubmit = async (values: initialValuesProps, { resetForm }: FormikHelpers<initialValuesProps>) => {
    const { message, postId, id, parentId } = values;
    try {
      const params = {
        message,
        postId,
        ...(parentId && { parentId }),
        ...(id && { id }),
      };
      if (type === 'add') {
        await createComment(params);
        toast.success('Post Created' as ToastContent);
      } else {
        await updateComment(params);
        toast.success('Post Created' as ToastContent);
      }
      resetForm();
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
              <CustomButton title="Submit" type="submit" isSubmitting={type === 'edit' ? updating : isLoading} />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
};

export default ConversationModal;
