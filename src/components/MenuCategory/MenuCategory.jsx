import Skeleton from '@mui/material/Skeleton';

import { CardProduct } from 'components/CardProduct';

import style from './MenuCategory.module.scss';

export const MenuCategory = ({ products }) => {
  const loading = false; /////////////////////////////////////////////////
  return (
    <>
      <ul className={style.productsList}>
        {products.map(({ productId, fullName, weight, chunks, price, smallImage }) => {
          return (
            <li key={productId} className={style.productsItem}>
              {loading ? (
                <>
                  <Skeleton variant="rectangular" width={330} height={120} />
                </>
              ) : (
                <CardProduct
                  productId={productId}
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
