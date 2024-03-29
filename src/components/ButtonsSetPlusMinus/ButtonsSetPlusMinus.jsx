import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { colors } from 'constants';
import style from './ButtonsSetPlusMinus.module.scss';

export const ButtonsSetPlusMinus = ({ type, handlerPlus, handlerMinus, quantity }) => {
  return (
    <>
      <div className={style.buttonsWrapper}>
        <IconButton
          sx={styles.forIconButton}
          disabled={quantity === 0}
          onClick={() => handlerMinus(type)}
          aria-label="minus"
        >
          {quantity === 1 ? (
            <DeleteForeverIcon sx={styles.forDeleteIcon} />
          ) : (
            <RemoveIcon sx={styles.forRemoveIcon} />
          )}
        </IconButton>
        <p className={style.quantityText}>{quantity}</p>
        <IconButton
          sx={styles.forIconButton}
          disabled={quantity === 99}
          onClick={() => handlerPlus(type)}
          aria-label="plus"
        >
          <AddCircleIcon sx={styles.forAddIcon} />
        </IconButton>
      </div>
    </>
  );
};

const styles = {
  forRemoveIcon: {
    fontSize: 16,
  },
  forDeleteIcon: {
    fontSize: 19,
    color: colors.SECONDARY_COLOR,
  },
  forAddIcon: {
    fontSize: 20,
    color: colors.MAIN_ACCENT_COLOR,
    ':hover': { COLOR: colors.ACTIVE_ACCENT_COLOR },
    ':focus': { color: colors.ACTIVE_ACCENT_COLOR },
  },
  forIconButton: {
    paddingTop: 0,
    paddingBottom: 0,
  },
};
