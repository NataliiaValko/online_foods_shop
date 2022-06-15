import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { priceOptions, colors } from 'constants';
// import { getDataCartsFromLS } from 'localeStorage/actionsLS';

import style from './TotalByOrder.module.scss';

export const TotalByOrder = ({ cart, quantity, amount, discount, shipping }) => {
  const getValidTextForShipping = shipping => {
    return shipping === 0 ? 'Free' : `${shipping} USD`;
  };

  const getValidTextForTotalQuantity = totalQuantity => {
    return totalQuantity > 1 ? `${totalQuantity} products` : `${totalQuantity} product`;
  };

  return (
    <>
      <Box sx={styles.forBoxResult}>
        <Stack direction="row" sx={styles.forRowResult}>
          <p className={style.resultPosition}>{getValidTextForTotalQuantity(quantity)}</p>
          <p className={style.resultAmount}>{`${amount} USD`}</p>
        </Stack>
        <Stack direction="row" sx={styles.forRowResult}>
          <p className={style.resultPosition}>Discount</p>
          <p className={style.resultAmount}>{`${discount} USD`}</p>
        </Stack>
        <Stack direction="row" sx={styles.forRowResult}>
          <p className={style.resultPosition}>Shipping</p>
          <p className={style.resultAmount}>{getValidTextForShipping(shipping)}</p>
        </Stack>
      </Box>
    </>
  );
};

const styles = {
  forRowResult: {
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingBottom: '10px',
    paddingTop: '10px',
    justifyContent: 'space-between',
    borderBottom: '0.5px solid #A4ACAD',
  },
  forRowTotal: {
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingBottom: '10px',
    paddingTop: '10px',
    justifyContent: 'space-between',
    borderBottom: '0.5px solid #A4ACAD',
    fontSize: 24,
    color: colors.MAIN_ACCENT_COLOR,
  },
};
