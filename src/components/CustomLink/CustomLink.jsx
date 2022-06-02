import Link from '@mui/material/Link';

import { colors } from 'constants';

export const CustomLink = ({ href, content }) => {
  return (
    <>
      <Link sx={styles.forLink} type="button" href={href} underline="none">
        {content}
      </Link>
    </>
  );
};

const styles = {
  forLink: {
    width: 330,
    height: 48,
    bgcolor: colors.ACTIVE_ACCENT_COLOR,
    borderRadius: '5px',
    color: colors.MAIN_LIGHT_COLOR,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};
