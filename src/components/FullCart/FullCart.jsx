import Link from '@mui/material/Link';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementQuantityProductByStep,
  incrementQuantityProductByStep,
} from 'redux/cart/cartSlice';

import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { CardProductsInCart } from 'components/CardProductsInCart';
import { TotalByOrder } from 'components/TotalByOrder';
import { CustomLink } from 'components/CustomLink';

import style from './FullCart.module.scss';

// import { state } from 'state.js'; /////////////////////////

export const FullCart = () => {
  const products = localStorage.getItem('productsInCart');
  const cart = useSelector(state => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const productTest = id => {
    const item = { idProduct: id, name: 'diehdi' };
    return item;
  };

  const handlerPlus = id => {
    dispatch(incrementQuantityProductByStep(productTest(id)));
    // console.log(`Product ${name} has increased to ${quantity + 1}`);
  };

  const handlerMinus = id => {
    dispatch(decrementQuantityProductByStep(productTest(id)));
    // console.log(`Product ${name} down to ${quantity - 1}`);
  };

  return (
    <>
      <section className={style.cart}>
        <Container>
          <Title text="Cart" />
          <ul className={style.productsList}>
            {cart.map(product => (
              <li key={product.id} className={style.productItem}>
                <CardProductsInCart
                  id={product.id}
                  image1x={product.image1x}
                  image2x={product.image2x}
                  name={product.name}
                  quantity={product.quantity}
                  price={product.price}
                  handlerPlus={() => handlerPlus(product.id)}
                  handlerMinus={handlerMinus(product.id)}
                />
              </li>
            ))}
          </ul>
          <div className={style.totalWrapper}>
            <h2 className={style.totalTitle}>Total</h2>
            <TotalByOrder />
          </div>
        </Container>
      </section>
    </>
  );
};
