import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { Footer } from 'components/Footer';
import { FeedbackList } from 'components/FeedbackList';
import { FeedbackForm } from 'components/FeedbackForm';

import style from './FeedbackPage.module.scss';

export const FeedbackPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const getSortingFeedbackList = feedbackList => {
    const newArr = feedbackList.sort((feedback1, feedback2) => {
      return new Date(feedback2.dateFeedback) - new Date(feedback1.dateFeedback);
    });
    return newArr;
  };

  return (
    <>
      <section className={style.feedback}>
        <Container>
          <Title text="Feedbacks" />
          <FeedbackList feedbackList={getSortingFeedbackList(feedbackList)} />
          <Button
            variant="contained"
            onClick={handleOpen}
            startIcon={<AddIcon />}
            sx={styles.forButtonAddFeedback}
          >
            Add a feedback
          </Button>
          <Modal open={open} onClose={handleClose}>
            <Box sx={styles.forFonModal}>
              <IconButton
                aria-label="close"
                size="small"
                sx={styles.forButtonClose}
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
              <FeedbackForm handleClose={handleClose} />
            </Box>
          </Modal>
        </Container>
      </section>
      <Footer />
    </>
  );
};

const styles = {
  forFonModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '330px',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  },

  forButtonAddFeedback: {
    width: '330px',
    bgcolor: '#000',
    color: '#fff',
    borderRadius: '5px',
    padding: '7px',
    ':hover': { bgcolor: '#F46D40' },
    ':focus': { bgcolor: '#F46D40' },
  },
  forButtonClose: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
};

const feedbackList = [
  {
    id: '1',
    nameAuthor: 'Rozaliia',
    dateFeedback: '02.24.21',
    rating: 5,
    textFeedback:
      'Your delivery and your dishes are the best in Bishkek! Always very tasty, on time, always polite couriers and girls on the phone!',
  },
  {
    id: '2',
    nameAuthor: 'Elena',
    dateFeedback: '11.18.22',
    rating: 3,
    textFeedback: 'So good!',
  },
  {
    id: '3',
    nameAuthor: 'Sergey Gavriljuk',
    dateFeedback: '12.01.20',
    rating: 4,
    textFeedback: 'Great choice of sushi!',
  },
];
