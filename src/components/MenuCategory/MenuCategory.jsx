import Skeleton from '@mui/material/Skeleton';

import { CardProduct } from 'components/CardProduct';

import style from './MenuCategory.module.scss';

export const MenuCategory = ({ products }) => {
  const loading = false; /////////////////////////////////////////////////
  return (
    <>
      {/* {console.log(products)} */}
      <ul className={style.productsList}>
        {products.map(({ id, fullName, weight, chunks, price, smallImage }) => {
          return (
            <li key={id} className={style.productsItem}>
              {loading ? (
                <>
                  <Skeleton variant="rectangular" width={330} height={120} />
                </>
              ) : (
                <CardProduct
                  id={id}
                  fullName={fullName}
                  weight={weight}
                  smallImage={smallImage}
                  price={price}
                  chunks={chunks}
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
