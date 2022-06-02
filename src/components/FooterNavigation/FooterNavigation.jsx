import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { Container } from 'components/Container';
import { MenuIcon, CartIcon, FeedbackIcon } from 'components/Icons';

import style from './FooterNavigation.module.scss';

export const FooterNavigation = () => {
  return (
    <>
      <Paper sx={styles.forBackgroundBottomNavigation} elevation={3}>
        <Container>
          <Stack direction="row" sx={styles.forBottomNavigation}>
            <Link type="button" href={'/'} underline="none">
              <MenuIcon />
              <p className={style.labelBottomNavigation}>Menu</p>
            </Link>
            <Link type="button" href={'/cart'} underline="none">
              <CartIcon />
              <p className={style.labelBottomNavigation}>Cart</p>
            </Link>
            <Link type="button" href={'/feedback'} underline="none">
              <FeedbackIcon />
              <p className={style.labelBottomNavigation}>Feedback</p>
            </Link>
          </Stack>
        </Container>
      </Paper>
    </>
  );
};

const styles = {
  forBackgroundBottomNavigation: { position: 'fixed', bottom: 0, left: 0, right: 0, height: 72 },
  forBottomNavigation: {
    height: 72,
    width: 240,
    marginLeft: 5.6,
    marginRight: 5.6,
    paddingTop: '10px',
    justifyContent: 'space-between',
  },
};
