import { Container } from 'components/Container';

import { Title } from 'components/Title';
import { colors } from 'constants';
import style from './EmptyCart.module.scss';

import { state } from 'state.js'; /////////////////////////

export const EmptyCart = () => {
  return (
    <>
      <section className={style.emptyCart}>
        <Container>
          <Title text="Your cart empty." />

          <p className={style.text}>Put something in it!</p>
        </Container>
      </section>
    </>
  );
};

const styles = {
  forButtonCheckout: {
    width: 330,
    height: 48,
    bgcolor: colors.ACTIVE_ACCENT_COLOR,
    borderRadius: '5px',
    color: colors.MAIN_LIGHT_COLOR,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
