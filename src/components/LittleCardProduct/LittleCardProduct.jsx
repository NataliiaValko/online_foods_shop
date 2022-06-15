import uniqid from 'uniqid';
import { useParams } from 'react-router-dom';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

// import { incrementQuantityProductByStep } from 'redux/cart/cartSlice';
import { colors } from 'constants';
import { addNewProductToCartToLS } from 'localeStorage/actionsLS';

import { backEnd } from 'backEnd.js';

import style from './LittleCardProduct.module.scss';

const getDataNewProduct = id => {
  const product = backEnd.products.reduce((acc, product) => {
    if (product.productId === id) {
      acc = { ...product, id: uniqid() };
    }
    return acc;
  }, {});

  return product;
};

export const LittleCardProduct = ({ button = false, fullName, price, smallImage, id }) => {
  // const dispatch = useDispatch();
  const { category } = useParams();

  const handleClick = e => {
    const newProduct = getDataNewProduct(e.currentTarget.dataset.id);
    addNewProductToCartToLS(newProduct);
  };

  return (
    <>
      <div className={style.cardBox}>
        <Link type="button" href={`/menu/${category}/${id}`} underline="none" sx={styles.forLink}>
          <div className={style.cardBox}>
            <div className={style.imageBox}>
              <img
                srcSet={`${smallImage.x1} 1x, ${smallImage.x2} 2x`}
                alt={`${fullName}`}
                className={style.productImage}
              />
            </div>
            <h3 className={style.fullName}>{fullName}</h3>
            {/* <div className={style.priceBox}> */}
            <p className={button ? style.price : style.priceCenter}>{`${price} USD`}</p>
            {/* </div> */}
          </div>
        </Link>
        {button && (
          <IconButton data-id={id} onClick={handleClick} aria-label="add" sx={styles.forIconAdd}>
            <AddCircleIcon sx={{ width: '32px', height: '32px' }} />
          </IconButton>
        )}
      </div>
    </>
  );
};

const styles = {
  forLink: {
    display: 'block',
    color: colors.PRIMARY_COLOR,
  },

  forIconAdd: {
    position: 'absolute',
    bottom: '0px',
    right: '0px',

    padding: 0,
    marginLeft: '10px',
    color: colors.ACTIVE_ACCENT_COLOR,
  },
};
