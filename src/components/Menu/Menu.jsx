import Skeleton from '@mui/material/Skeleton';

import { CardMenu } from 'components/CardMenu';

import style from './Menu.module.scss';

export const Menu = ({ categories }) => {
  const loading = false; /////////////////////////////////////////////////
  return (
    <>
      <ul className={style.categoriesList}>
        {categories.map((category, index, categories) => {
          return categories.length % 2 === 0 ? (
            index === categories.length - 1 || index === categories.length - 2 ? (
              <li key={category.categoryId} className={style.categoriesItem}>
                {loading ? (
                  <Skeleton variant="rectangular" width={160} height={157} />
                ) : (
                  <CardMenu
                    size="large"
                    categoryName={category.name}
                    largeImage={category.largeImage}
                    smallImage={category.smallImage}
                    fullName={category.fullName}
                    soon={category.soon}
                  />
                )}
              </li>
            ) : (
              <li key={category.categoryId} className={style.categoriesItem}>
                {loading ? (
                  <Skeleton variant="rectangular" width={160} height={157} />
                ) : (
                  <CardMenu
                    size="small"
                    categoryName={category.name}
                    largeImage={category.largeImage}
                    smallImage={category.smallImage}
                    fullName={category.fullName}
                    soon={category.soon}
                  />
                )}
              </li>
            )
          ) : index === categories.length - 1 ? (
            <li key={category.categoryId} className={style.categoriesItem}>
              <CardMenu
                size="large"
                categoryName={category.name}
                largeImage={category.largeImage}
                smallImage={category.smallImage}
                fullName={category.fullName}
                soon={category.soon}
              />
            </li>
          ) : (
            <li key={category.categoryId} className={style.categoriesItem}>
              <CardMenu
                size="small"
                categoryName={category.name}
                largeImage={category.largeImage}
                smallImage={category.smallImage}
                fullName={category.fullName}
                soon={category.soon}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
