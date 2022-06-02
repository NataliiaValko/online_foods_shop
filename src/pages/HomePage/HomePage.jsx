import { Container } from 'components/Container';
import { Menu } from 'components/Menu';
import { Footer } from 'components/Footer';
import { Description } from 'components/Description';
import { backEnd } from 'backEnd.js';

import style from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <>
      <section className={style.menu}>
        <Container>
          <h1 className={style.hiddenTitle}>Menu</h1>
          <Menu categories={backEnd.categories} />
        </Container>
      </section>
      <Description />
      <Footer />
    </>
  );
};
