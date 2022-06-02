import { useState } from 'react';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { Container } from 'components/Container';
import { colors } from 'constants';

import style from './Description.module.scss';

export const Description = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <section className={style.description}>
      <Container>
        <h2 className={style.title}>Order sushi in Bishkek</h2>
        <div className={show ? style.descriptionBoxFull : style.descriptionBox}>
          <p className={style.description}>
            Restaurant "Sushi and Noodles" offer our customers the most delicious sushi with
            delivery to the house, cooked according to classic and adapted to the European audience
            recipes, as well as our own experience of our chefs. We appreciate the time of our
            customers, so you can order sushi in Beshkek with delivery to the house or office.
          </p>
          {!show && <div className={style.gradientBox}></div>}
        </div>
        <Button
          type="button"
          sx={styles.forButtonDetails}
          endIcon={show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          onClick={toggleShow}
        >
          {show ? 'Hide' : 'Details'}
        </Button>
      </Container>
    </section>
  );
};

const styles = {
  forButtonDetails: {
    width: '120px',
    margin: '10px 105px 20px 105px',
    padding: 0,
    fontSize: 22,
    lineHeight: 1,
    fontWeight: 400,
    color: colors.ACTIVE_ACCENT_COLOR,
    textTransform: 'capitalize',
    display: 'inline-block',
  },
};
