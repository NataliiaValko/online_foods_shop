import { useDispatch } from 'react-redux';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

import { incrementQuantityProductByStep } from 'redux/cart/cartSlice';
import { colors } from 'constants';

import style from './LittleCardProduct.module.scss';

const productTest = id => {
  const item = { idProduct: id, name: 'diehdi' };
  // console.log(item);
  return item;
};

export const LittleCardProduct = ({ button = false, fullName, price, smallImage, id }) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(incrementQuantityProductByStep(productTest(e.currentTarget.dataset.id)));
    // console.log(`id ${e.currentTarget.dataset.id}`);
  };

  return (
    <>
      <div className={style.cardBox}>
        <div className={style.imageBox}>
          <img
            srcSet={`${smallImage.x1} 1x, ${smallImage.x2} 2x`}
            alt={`${fullName}`}
            className={style.productImage}
          />
        </div>
        <h3 className={style.fullName}>{fullName}</h3>
        <div className={style.priceBox}>
          <p className={style.price}>{`${price} USD`}</p>
          {button && (
            <IconButton data-id={id} onClick={handleClick} aria-label="add" sx={styles.forIconAdd}>
              <AddCircleIcon sx={{ width: '32px', height: '32px' }} />
            </IconButton>
          )}
        </div>
      </div>
    </>
  );
};

const styles = {
  forIconAdd: {
    padding: 0,
    marginLeft: '10px',
    color: colors.ACTIVE_ACCENT_COLOR,
  },
};
