import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import uniqid from 'uniqid';

import { addNewProductToCartToLS } from 'localeStorage/actionsLS';

import style from './CardProduct.module.scss';

import { backEnd } from 'backEnd.js'; ///////////////////

export const CardProduct = ({ productId, fullName, weight, smallImage, price, chunks }) => {
  const { category } = useParams();
  // const dispatch = useDispatch();

  const getDataNewProduct = id => {
    const product = backEnd.products.reduce((acc, product) => {
      if (product.productId === id) {
        acc = { ...product, id: uniqid() };
      }
      return acc;
    }, {});

    return product;
  };

  const handleClick = e => {
    const newProduct = getDataNewProduct(e.currentTarget.dataset.id);
    addNewProductToCartToLS(newProduct);
  };

  return (
    <>
      <div className={style.cardProductWrapper}>
        <Link
          type="button"
          href={`/menu/${category}/${productId}`}
          underline="none"
          sx={styles.forLink}
        >
          <div className={style.cardProductBox}>
            <div className={style.imageBox}>
              <img
                srcSet={`${smallImage.x1} 1x, ${smallImage.x2} 2x`}
                alt={`${fullName}`}
                className={style.productImage}
              />
            </div>
            <div className={style.productInfoBox}>
              <h2 className={style.productFullName}>{fullName}</h2>
              <p className={style.productDetailsText}>{`${weight} grams ${chunks} chunks`}</p>
              <p className={style.productPrice}>{`${price} USD`}</p>
            </div>
          </div>
        </Link>
        <Button
          data-id={productId}
          variant="contained"
          type="button"
          onClick={handleClick}
          sx={styles.forButtonWanna}
        >
          Wanna!
        </Button>
      </div>
    </>
  );
};

const styles = {
  forLink: {
    display: 'block',
  },
  forButtonWanna: {
    position: 'absolute',
    bottom: '19px',
    right: '10px',
    width: 95,
    height: 26,
    padding: 0,
    background: '#F46D40',
    borderRadius: '5px',
    color: '#fff',
    fontSize: 18,
    lineHeight: '1.222',
    letterSpacing: 0,
    textTransform: 'capitalize',
    ':hover': { bgcolor: '#e64915' },
    ':focus': { bgcolor: '#e64915' },
  },
};
