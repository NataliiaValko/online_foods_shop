import { useState } from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { Formik, Field, Form } from 'formik';
import { colors } from 'constants';

import style from './FeedbackForm.module.scss';

export const FeedbackForm = ({ handleClose }) => {
  const [value, setValue] = useState(0);

  const initialValues = {
    nameAuthorsFeedback: '',
    textFeedback: '',
  };

  const getDataFormFeedback = values => {
    if (
      values.nameAuthorsFeedback === initialValues.nameAuthorsFeedback &&
      values.textFeedback === initialValues.textFeedback &&
      value === 0
    ) {
      return;
    }

    console.log(
      `name: ${values.nameAuthorsFeedback}, text: ${values.textFeedback}, rating: ${value}`,
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          nameAuthorsFeedback: '',
          textFeedback: '',
        }}
        onSubmit={values => {
          console.log(values);
          getDataFormFeedback(values);
          handleClose();
          setValue('0');
        }}
      >
        <Form>
          <label htmlFor="nameAuthorsFeedback">Name</label>
          <Field
            id="nameAuthorsFeedback"
            name="nameAuthorsFeedback"
            placeholder="Your name"
            className={style.fieldName}
          />

          <label htmlFor="textFeedback">Your feedback</label>
          <Field
            as="textarea"
            rows="8"
            className={style.fieldFeedback}
            id="textFeedback"
            name="textFeedback"
            placeholder="Enter your feedback..."
          />

          <Rating
            name="rating"
            id="rating"
            value={value}
            onChange={(event, newValue) => {
              newValue ? setValue(newValue) : setValue(0);
            }}
          />
          <Button variant="contained" type="submit" sx={styles.forButtonSend}>
            Send
          </Button>
        </Form>
      </Formik>
    </>
  );
};

const styles = {
  forButtonSend: {
    bgcolor: colors.MAIN_ACCENT_COLOR,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15px',
    ':hover': { bgcolor: colors.ACTIVE_ACCENT_COLOR },
    ':focus': { bgcolor: colors.ACTIVE_ACCENT_COLOR },
  },
};
