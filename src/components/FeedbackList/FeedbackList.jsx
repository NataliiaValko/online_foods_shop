import Rating from '@mui/material/Rating';

import style from './FeedbackList.module.scss';

export const FeedbackList = ({ feedbackList }) => {
  return (
    <>
      <ul className={style.feedbackList}>
        {feedbackList.map(feedback => (
          <li key={feedback.id} className={style.feedbackItem}>
            <div className={style.feedbackHead}>
              <h2 className={style.feedbackNameAuthor}>{feedback.nameAuthor}</h2>
              <p className={style.feedbackDate}>{feedback.dateFeedback}</p>
            </div>
            <Rating name="read-only" value={feedback.rating} readOnly />
            <p className={style.feedbackText}>{feedback.textFeedback}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
