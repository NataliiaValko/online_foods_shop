import Button from '@mui/material/Button';
import uniqid from 'uniqid';
// import { incrementQuantityProductByStep } from 'redux/cart/cartSlice';

import { Title } from 'components/Title';
import { Carousel } from 'components/Carousel';
import { colors } from 'constants';
import { addNewProductToCartToLS } from 'localeStorage/actionsLS';

import style from './BigCardProduct.module.scss';

import { backEnd } from 'backEnd.js'; ///////////////////

const getDataNewProduct = id => {
  const product = backEnd.products.reduce((acc, product) => {
    if (product.id === id) {
      acc = { ...product, id: uniqid() };
    }
    return acc;
  }, {});

  return product;
};

export const BigCardProduct = ({
  product: { id, largeImage, smallImage, fullName, weight, chunks, price },
  composition,
}) => {
  // const dispatch = useDispatch();

  const handleClick = e => {
    const newProduct = getDataNewProduct(e.currentTarget.dataset.id);
    addNewProductToCartToLS(newProduct);
  };

  return (
    <>
      <div className={style.productWrapper}>
        <div className={style.productBox}>
          <img
            srcSet={`${largeImage.x1} 1x, ${largeImage.x2} 2x`}
            alt={`${fullName}`}
            className={style.productImage}
          />
          <Title text={fullName} />
          <p className={style.productDetail}>{`${weight} grams ${chunks} chunks`}</p>
          <div className={style.priceBox}>
            <p className={style.productPrice}>{`${price} USD`}</p>
            <Button
              data-id={id}
              variant="contained"
              type="button"
              onClick={handleClick}
              sx={styles.forButtonWanna}
            >
              Wanna!
            </Button>
          </div>
        </div>
        <h2 className={style.title}>Set composition</h2>
        <Carousel products={composition} time="1500" />
      </div>
    </>
  );
};

const styles = {
  forButtonWanna: {
    width: 188,
    height: 40,
    padding: 0,
    background: colors.ACTIVE_ACCENT_COLOR,
    borderRadius: '5px',
    color: colors.MAIN_LIGHT_COLOR,
    fontSize: 24,
    lineHeight: '1.222',
    letterSpacing: 0,
    textTransform: 'capitalize',
    ':hover': { bgcolor: '#e64915' },
    ':focus': { bgcolor: '#e64915' },
  },
};
