import { useState } from 'react';
import uniqid from 'uniqid';

import { backEnd } from 'backEnd.js'; //////////////////////

import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { CardProductsInCart } from 'components/CardProductsInCart';
import { TotalByOrder } from 'components/TotalByOrder';
import { priceOptions } from 'constants';
import {
  getDataCartsFromLS,
  addNewProductToCartToLS,
  removeProductFromDataCartsFromLSById,
} from 'localeStorage/actionsLS';

import style from './FullCart.module.scss';

export const FullCart = () => {
  const [cart, setCart] = useState(getDataCartsFromLS());
  const getValidDataFromCart = cart => {
    return cart
      .reduce((acc, item) => {
        const includes = acc.find(product => product.productId === item.productId);
        return includes
          ? [
              ...acc.filter(el => el.productId !== item.productId),
              { ...item, quantity: includes.quantity + 1 },
            ]
          : [...acc, { ...item, quantity: 1 }];
      }, [])
      .sort((a, b) => a.productId - b.productId);
  };

  const getDataNewProduct = id => {
    const product = backEnd.products.reduce((acc, product) => {
      if (product.productId === id) {
        acc = { ...product, id: uniqid() };
      }
      return acc;
    }, {});

    return product;
  };

  const handlerPlus = productId => {
    addNewProductToCartToLS(getDataNewProduct(productId));
    setCart([...cart, { ...getDataNewProduct(productId) }]);
  };

  const handlerMinus = productId => {
    removeProductFromDataCartsFromLSById(productId);
    const id = cart.reduce((acc, product) => {
      if (productId === product.productId) {
        acc = product.id;
      }
      return acc;
    }, '');
    console.log(id);
    if (id) {
      const newCart = cart.filter(product => product.id !== id);
      setCart(newCart);
    }
  };

  const getTotalQuantity = products => {
    return products.length;
  };

  const getTotalAmount = products => {
    return products.reduce((acc, product) => {
      acc = Number(Number(product.price) + Number(acc)).toFixed(2);
      return acc;
    }, 0);
  };

  const getDiscount = totalAmount => {
    return priceOptions.RULE_DISCOUNT.reduce((acc, rule) => {
      acc =
        totalAmount >= rule.AMOUNT && rule.DISCOUNT * totalAmount > acc
          ? (rule.DISCOUNT * totalAmount).toFixed(2)
          : Number(acc).toFixed(2);
      return acc;
    }, 0);
  };

  const getShipping = totalAmount => {
    return totalAmount >= priceOptions.AMOUNT_FOR_FREE_SHIPPING ? 0 : priceOptions.PRICE_SHIPPING;
  };

  return (
    <>
      <section className={style.cart}>
        <Container>
          <Title text="Cart" />
          <ul className={style.productsList}>
            {getValidDataFromCart(cart).map(product => (
              <li key={product.productId} className={style.productItem}>
                <CardProductsInCart
                  id={product.productId}
                  image1x={product.smallImage.x1}
                  image2x={product.smallImage.x2}
                  name={product.fullName}
                  quantity={product.quantity}
                  price={product.price}
                  handlerPlus={() => handlerPlus(product.productId)}
                  handlerMinus={() => handlerMinus(product.productId)}
                />
              </li>
            ))}
          </ul>
          <div className={style.totalWrapper}>
            <h2 className={style.totalTitle}>Total</h2>
            <TotalByOrder
              cart={cart}
              quantity={getTotalQuantity(cart)}
              amount={getTotalAmount(cart)}
              discount={getDiscount(getTotalAmount(cart))}
              shipping={getShipping(getTotalAmount(cart))}
            />
          </div>
        </Container>
      </section>
    </>
  );
};
