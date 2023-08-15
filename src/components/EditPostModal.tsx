import { Grid } from '@mui/material';
import CustomButton from 'components/CustomButton';
import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import { useUpdatePostMutation } from 'redux/api/postQuery/mutation';
import FormikControl from 'validation/FormikControl';
import { CreatePostSchema } from 'validation/ValidationSchema';
import { toast, ToastContent } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import React, { ChangeEvent, useState } from 'react';
interface Values {
  title: string;
  image: string;
  message: string;
  category: string;
}

const EditPostModal = ({ state }: any) => {
  const { title, message, image, _id, category } = state;

  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const navigate = useNavigate();
  const handleSubmit = async (values: Values, { resetForm }: FormikHelpers<Values>) => {
    const { message, image, title, category } = values;

    const form = new FormData();
    form.append('title', title);
    form.append('message', message);
    form.append('_method', 'PATCH');
    if (typeof image !== 'string') {
      form.append('image', image[0]);
    }
    form.append('category', category);
    const response = await updatePost({ id: _id, body: form });
    if ('data' in response) {
      setTimeout(() => resetForm(), 2000);
      setTimeout(() => navigate('/home'), 2100);
      const message = response.data;
      toast.success(message as ToastContent);
    } else {
      const message = response.error;
      toast.error(message as ToastContent);
    }
  };
  const MaxWordCount = 100;
  const [count, setCount] = useState<number>(0);
  const initialValues = { title, message, image, category };
  const handleInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    setFieldValue: FormikProps<Values>['setFieldValue'],
  ) => {
    const inputText = event.target.value.trim();
    if (inputText.length <= MaxWordCount) {
      setCount(inputText.length);
      setFieldValue('title', inputText);
    }
  };
  const options = [
    {
      value: 'news',
      key: 'News',
    },
    {
      value: 'sport',
      key: 'Sport',
    },
    {
      value: 'entertainment',
      key: 'Entertainment',
    },
    {
      value: 'service',
      key: 'Service',
    },
    {
      value: 'romantic',
      key: 'Romantic',
    },
    {
      value: 'tech',
      key: 'Tech',
    },
  ];

  return (
    <Grid item md={11} xs={12} sx={{ py: 2, margin: 'auto' }}>
      <Grid item container sx={{ maxWidth: '100%', width: '100%' }}>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={CreatePostSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form style={{ maxWidth: '100%', width: '100%' }}>
              <Grid item flexDirection="column" container gap={4}>
                <Grid item container>
                  <FormikControl
                    name="title"
                    placeholder="Title"
                    countError={count === MaxWordCount}
                    helperText={count === MaxWordCount && 'Max Length of 100 letters'}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e, setFieldValue)}
                  />
                </Grid>
                <Grid item container>
                  {/* mb={{ md: 4, xs: 2 }} */}
                  <FormikControl name="message" control="textarea" placeholder="Message" />
                </Grid>
                <Grid item container>
                  <FormikControl name="category" control="select" placeholder="Select Category" options={options} />
                </Grid>
                <Grid item container>
                  <FormikControl name="image" control="file" />
                </Grid>
                <Grid item container mt={5}>
                  <CustomButton title="Submit" type="submit" isSubmitting={isLoading} />
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default EditPostModal;
