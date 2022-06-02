import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { Footer } from 'components/Footer';
import { Description } from 'components/Description';
import { SortMenu } from 'components/SortMenu';
import { MenuCategory } from 'components/MenuCategory';
import { getIconCategories } from 'utils/iconCategories';
import { backEnd, typesSort } from 'backEnd.js';
import style from './CategoryPage.module.scss';

export const CategoryPage = () => {
  const [typeSort, setTypeSort] = useState('Default');
  const { category } = useParams();

  const getTypesSort = (category, backEnd) => {
    return backEnd.categories.reduce((acc, categoryEl) => {
      if (categoryEl.name === category) {
        acc.push(...categoryEl.typesSort);
      }
      return acc;
    }, []);
  };

  const getSortedArrayProducts = (category, backEnd) => {
    const categoryId = backEnd.categories.filter(categoryEl => categoryEl.name === category)[0].id;
    const products = backEnd.products.reduce((acc, product) => {
      if (product.categoryId === categoryId) {
        acc.push(product);
      }
      return acc;
    }, []);

    switch (typeSort) {
      case typesSort.CHEAPER_AT_FIRST:
        return products.sort((a, b) => {
          return a.price - b.price;
        });

      case typesSort.MORE_EXPENSIVE_AT_FIRST:
        return products.sort((a, b) => {
          return b.price - a.price;
        });

      case typesSort.NUMBER_OF_PIECES:
        return products.sort((a, b) => {
          return a.chunks - b.chunks;
        });

      case typesSort.WEIGHT:
        return products.sort((a, b) => {
          return a.weight - b.weight;
        });

      case typesSort.BY_NAME:
      default:
        return products.sort((a, b) => {
          return a.fullName.localeCompare(b.fullName);
        });
    }
  };

  const handlerChooseTypeSort = typeSort => {
    setTypeSort(typeSort);
  };

  return (
    <>
      <section className={style.category}>
        <Container>
          <div className={style.titleBox}>
            <div className={style.iconBox}>{getIconCategories(category)}</div>
            <div className={style.resetMargin}>
              <Title text={category} />
            </div>
          </div>
          <SortMenu
            handlerChooseTypeSort={handlerChooseTypeSort}
            typesSort={getTypesSort(category, backEnd)}
          />
          <MenuCategory products={getSortedArrayProducts(category, backEnd)} />
        </Container>
      </section>
      <Description />
      <Footer />
    </>
  );
};
