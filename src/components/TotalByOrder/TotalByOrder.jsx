import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { priceOptions, colors } from 'constants';

import style from './TotalByOrder.module.scss';

import { state } from 'state.js'; /////////////////////////

export const TotalByOrder = () => {
  const getTotalAmount = products => {
    return products.reduce((acc, product) => {
      return (acc = product.quantity * product.price + acc);
    }, 0);
  };

  const getTotalQuantity = products => {
    return products.reduce((acc, product) => {
      return (acc = product.quantity + acc);
    }, 0);
  };

  const getShipping = totalAmount => {
    return totalAmount >= priceOptions.AMOUNT_FOR_FREE_SHIPPING ? 0 : priceOptions.PRICE_SHIPPING;
  };

  const getDiscount = totalAmount => {
    return priceOptions.RULE_DISCOUNT.reduce((acc, rule) => {
      acc =
        totalAmount >= rule.AMOUNT && rule.DISCOUNT * totalAmount > acc
          ? rule.DISCOUNT * totalAmount
          : acc;
      return acc;
    }, 0);
  };

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
          <p className={style.resultPosition}>
            {getValidTextForTotalQuantity(getTotalQuantity(state.cart))}
          </p>
          <p className={style.resultAmount}>{`${getTotalAmount(state.cart)} USD`}</p>
        </Stack>
        <Stack direction="row" sx={styles.forRowResult}>
          <p className={style.resultPosition}>Discount</p>
          <p className={style.resultAmount}>{`${getDiscount(getTotalAmount(state.cart))} USD`}</p>
        </Stack>
        <Stack direction="row" sx={styles.forRowResult}>
          <p className={style.resultPosition}>Shipping</p>
          <p className={style.resultAmount}>
            {getValidTextForShipping(getShipping(getTotalAmount(state.cart)))}
          </p>
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
