import Link from '@mui/material/Link';
import { StylesContext } from '@mui/styles';

import style from './CardMenu.module.scss';

export const CardMenu = ({ size, categoryName, largeImage, smallImage, fullName, soon }) => {
  return (
    <Link type="button" href={`/menu/${categoryName}`} underline="none" sx={styles.forLink}>
      {size === 'large' ? (
        <div className={style.categoryLargeBox}>
          <img
            srcSet={`${largeImage.x1} 1x, ${largeImage.x2} 2x`}
            alt={`${fullName}`}
            className={style.categoryImage}
          />
          <h2 className={style.fullName}>{fullName}</h2>
          {soon && (
            <div className={style.soonBox}>
              <p className={style.soonText}>Soon</p>
            </div>
          )}
        </div>
      ) : (
        <div className={style.categoryBox}>
          <img
            srcSet={`${smallImage.x1} 1x, ${smallImage.x2} 2x`}
            alt={`${fullName}`}
            className={style.categoryImage}
          />
          <h2 className={style.fullName}>{fullName}</h2>
          {soon && (
            <div className={style.soonBox}>
              <p className={style.soonText}>Soon</p>
            </div>
          )}
        </div>
      )}
    </Link>
  );
};

const styles = {
  forLink: {
    display: 'block',
  },
};
