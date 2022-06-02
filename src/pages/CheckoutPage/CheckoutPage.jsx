import { useState } from 'react';
import Button from '@mui/material/Button';
import { Formik, Field, Form } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { CheckboxCustom } from 'components/CheckboxCustom';
import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { ButtonsSetPlusMinus } from 'components/ButtonsSetPlusMinus';
import { TotalByOrder } from 'components/TotalByOrder';
import { ReactComponent as CashIcon } from 'images/cash.svg';
import { ReactComponent as CardIcon } from 'images/card.svg';
import { deliveryOptions, priceOptions } from 'constants';

import style from './CheckoutPage.module.scss';

import { state } from 'state.js'; /////////////////////////

const promoCodeList = [
  ///////////////////////////////////
  {
    code: 'ILoveSushi',
    discount: 0.1,
  },
  {
    code: 'OneYear',
    discount: 0.15,
  },
];

export const CheckoutPage = ({}) => {
  const [checkedChange, setCheckedChange] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [normalSticksQuantity, setNormalSticksQuantity] = useState(0);
  const [educationalSticksQuantity, setEducationalSticksQuantity] = useState(0);

  const toggleCheckedChange = () => setCheckedChange(!checkedChange);

  const handlerMinus = type => {
    switch (type) {
      case deliveryOptions.TYPE_STICKS.NORMAL:
        setNormalSticksQuantity(normalSticksQuantity - 1);
        break;

      case deliveryOptions.TYPE_STICKS.EDUCATIONAL:
        setEducationalSticksQuantity(educationalSticksQuantity - 1);
        break;

      default:
        console.log('What  happened?');
    }
  };

  const handlerPlus = type => {
    switch (type) {
      case deliveryOptions.TYPE_STICKS.NORMAL:
        setNormalSticksQuantity(normalSticksQuantity + 1);
        break;

      case deliveryOptions.TYPE_STICKS.EDUCATIONAL:
        setEducationalSticksQuantity(educationalSticksQuantity + 1);
        break;

      default:
        console.log('What  happened?');
    }
  };

  const getTotalAmount = products => {
    return products.reduce((acc, product) => {
      return (acc = product.quantity * product.price + acc);
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

  const getTotalAmountInOrder = products => {
    return (
      getTotalAmount(products) -
      getDiscount(getTotalAmount(products)) +
      getShipping(getTotalAmount(products))
    );
  };

  return (
    <>
      <section className={style.checkout}>
        <Container>
          <Title text="Your data" />

          <Formik
            initialValues={{
              lastName: '',
              firstName: '',
              deliveryMethod: deliveryOptions.DELIVERY_METHOD.COURIER,
              street: '',
              house: '',
              apartment: '',
              entrance: '',
              floor: '',
              code: '',
              payMethod: deliveryOptions.PAY_METHOD.CASH,
              change: '',
              email: '',
              comment: '',
              timeMethod: deliveryOptions.TIME_METHOD.NOW,
              sticks: {
                [deliveryOptions.TYPE_STICKS.EDUCATIONAL]: 0,
                [deliveryOptions.TYPE_STICKS.NORMAL]: 0,
              },
              promoCode: '',
            }}
            onSubmit={values => {
              values.change = checkedChange ? values.change : '';
              values.sticks[deliveryOptions.TYPE_STICKS.EDUCATIONAL] = educationalSticksQuantity;
              values.sticks[deliveryOptions.TYPE_STICKS.NORMAL] = normalSticksQuantity;
              values.promoCode = promoCode;

              console.log(values);
            }}
          >
            <Form>
              <Field
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className={style.halfFieldLeft}
              />
              <Field
                id="firstName"
                name="firstName"
                placeholder="First name"
                className={style.halfField}
              />
              <div className={style.radioButtonBox}>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`deliveryMethod${deliveryOptions.DELIVERY_METHOD.COURIER}`}
                    name="deliveryMethod"
                    type="radio"
                    value={deliveryOptions.DELIVERY_METHOD.COURIER}
                  />
                  <label htmlFor={`deliveryMethod${deliveryOptions.DELIVERY_METHOD.COURIER}`}>
                    Courier
                  </label>
                </div>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`deliveryMethod${deliveryOptions.DELIVERY_METHOD.PICKUP}`}
                    name="deliveryMethod"
                    type="radio"
                    value={deliveryOptions.DELIVERY_METHOD.PICKUP}
                  />
                  <label htmlFor={`deliveryMethod${deliveryOptions.DELIVERY_METHOD.PICKUP}`}>
                    Pickup
                  </label>
                </div>
              </div>

              <Field id="street" name="street" placeholder="Street" className={style.fullField} />
              <Field id="house" name="house" placeholder="House" className={style.fullField} />
              <Field
                id="apartment"
                name="apartment"
                placeholder="Apartment"
                className={style.halfFieldLeft}
              />
              <Field
                id="entrance"
                name="entrance"
                placeholder="Entrance"
                className={style.halfField}
              />
              <Field id="floor" name="floor" placeholder="Floor" className={style.halfFieldLeft} />
              <Field id="code" name="code" placeholder="Code" className={style.halfField} />
              <div className={style.radioButtonBox}>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`payMethod${deliveryOptions.PAY_METHOD.CASH}`}
                    name="payMethod"
                    type="radio"
                    value={deliveryOptions.PAY_METHOD.CASH}
                  />
                  <label
                    htmlFor={`payMethod${deliveryOptions.PAY_METHOD.CASH}`}
                    className={style.labelCheckBox}
                  >
                    <CashIcon className={style.rightMargin10} />
                    Cash
                  </label>
                </div>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`payMethod${deliveryOptions.PAY_METHOD.CARD}`}
                    name="payMethod"
                    type="radio"
                    value={deliveryOptions.PAY_METHOD.CARD}
                  />
                  <label
                    htmlFor={`payMethod${deliveryOptions.PAY_METHOD.CARD}`}
                    className={style.labelCheckBox}
                  >
                    <CardIcon className={style.rightMargin10} />
                    Card
                  </label>
                </div>
              </div>
              <div>
                <FormControlLabel
                  onChange={toggleCheckedChange}
                  control={<CheckboxCustom />}
                  label="Prepare the change at"
                />
                <Field
                  id="change"
                  name="change"
                  disabled={!checkedChange}
                  placeholder="Amount"
                  className={style.shortFieldLeft}
                />
              </div>
              <Field
                id="email"
                name="email"
                placeholder="E-mail (not necessarily)"
                className={style.fullField}
              />
              <Field
                id="comment"
                name="comment"
                placeholder="Сomment to the order"
                className={style.fullField}
              />

              <div className={style.radioButtonBox}>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`timeMethod${deliveryOptions.TIME_METHOD.NOW}`}
                    name="timeMethod"
                    type="radio"
                    value={deliveryOptions.TIME_METHOD.NOW}
                  />
                  <label htmlFor={`timeMethod${deliveryOptions.TIME_METHOD.NOW}`}>Now</label>
                </div>
                <div className={style.radioButtonItem}>
                  <Field
                    id={`timeMethod${deliveryOptions.TIME_METHOD.AT_THE_TIME}`}
                    name="timeMethod"
                    type="radio"
                    value={deliveryOptions.TIME_METHOD.AT_THE_TIME}
                  />
                  <label htmlFor={`timeMethod${deliveryOptions.TIME_METHOD.AT_THE_TIME}`}>
                    At the time
                  </label>
                </div>
              </div>
              <div className={style.quantitySticksWrapper}>
                <div className={style.quantitySticksBox}>
                  <p
                    className={style.typeSticksText}
                  >{`Sticks + sauce ${deliveryOptions.TYPE_STICKS.NORMAL}`}</p>
                  <ButtonsSetPlusMinus
                    type={deliveryOptions.TYPE_STICKS.NORMAL}
                    handlerPlus={handlerPlus}
                    handlerMinus={handlerMinus}
                    quantity={normalSticksQuantity}
                  />
                </div>
                <div className={style.quantitySticksBox}>
                  <p
                    className={style.typeSticksText}
                  >{`Sticks + sauce ${deliveryOptions.TYPE_STICKS.EDUCATIONAL}`}</p>

                  <ButtonsSetPlusMinus
                    type={deliveryOptions.TYPE_STICKS.EDUCATIONAL}
                    handlerPlus={handlerPlus}
                    handlerMinus={handlerMinus}
                    quantity={educationalSticksQuantity}
                  />
                </div>
              </div>
              <Field
                id="promoCode"
                name="promoCode"
                placeholder="Enter the promo code"
                className={style.fullField}
                onChange={event => setPromoCode(event.target.value)}
                value={promoCode}
              />
              <Box sx={styles.forBoxResult}>
                <TotalByOrder />
                <Stack direction="row" sx={styles.forRowTotal}>
                  <p className={style.totalPosition}>Total</p>
                  <p className={style.resultAmount}>{`${getTotalAmountInOrder(state.cart)} USD`}</p>
                </Stack>
              </Box>
              <Button variant="contained" type="submit" sx={styles.forButtonSend}>
                Send
              </Button>
            </Form>
          </Formik>
        </Container>
      </section>
    </>
  );
};

const styles = {
  forRemoveIcon: {
    fontSize: 10,
  },
  forAddIcon: {
    fontSize: 20,
    color: '#FF9846',
    ':hover': { color: '#F46D40' },
    ':focus': { color: '#F46D40' },
  },
  forIconButton: {
    paddingTop: 0,
    paddingBottom: 0,
  },
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
    color: '#FF9846',
  },
  forButtonSend: {
    width: 330,
    height: 48,
    background: '#F46D40',
    borderRadius: '5px',
    color: '#fff',
    fontSize: 24,
    textTransform: 'capitalize',
    ':hover': { bgcolor: '#e64915' },
    ':focus': { bgcolor: '#e64915' },
  },
  forBoxResult: {
    marginBottom: '30px',
  },
};
