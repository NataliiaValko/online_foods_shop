import { ButtonsSetPlusMinus } from 'components/ButtonsSetPlusMinus';

import style from './CardProductsInCart.module.scss';

export const CardProductsInCart = ({
  image1x,
  image2x,
  name,
  id,
  quantity,
  price,
  handlerPlus,
  handlerMinus,
}) => {
  return (
    <>
      <div className={style.productItemWrapper}>
        <div className={style.productImageBox}>
          <img
            srcSet={`${image1x} 1x, ${image2x} 2x`}
            alt={`${name}`}
            className={style.productImage}
          />
        </div>
        <div className={style.productInfoBox}>
          <h2 className={style.productName}>{name}</h2>
          <div className={style.productDetailsBox}>
            <ButtonsSetPlusMinus
              type={id}
              handlerPlus={() => handlerPlus(name, quantity)}
              handlerMinus={() => handlerMinus(name, quantity)}
              quantity={quantity}
            />
            <p className={style.productTotalPrice}>{`${price * quantity} USD`}</p>
          </div>
        </div>
      </div>
    </>
  );
};
