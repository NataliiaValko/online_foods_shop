import { useParams } from 'react-router-dom';

import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Description } from 'components/Description';
import { Carousel } from 'components/Carousel';

import { BigCardProduct } from 'components/BigCardProduct';

import 'react-alice-carousel/lib/alice-carousel.css';

import { backEnd } from 'backEnd.js';

import style from './ProductPage.module.scss';

export const ProductPage = () => {
  const { category, product: productId } = useParams();
  const product = backEnd.products.find(product => product.productId === productId);

  const getRecommendationProducts = (category, backEnd) => {
    const categoryId = backEnd.categories.filter(categoryEl => categoryEl.name === category)[0]
      .categoryId;

    const products = backEnd.products.reduce((acc, product) => {
      if (product.categoryId === categoryId) {
        acc.push(product);
      }
      return acc;
    }, []);

    const randomIndex = () => Math.floor(Math.random() * (products.length - 1 - 0) + 0);

    return Array.from({ length: 4 }, _ => products[randomIndex()]);
  };

  const getCompositionProduct = product => {
    // console.log(product);
    return product.compositionId.map(id => {
      return backEnd.products.find(product => {
        return product.productId === id;
      });
    });
  };
  // console.log(getRecommendationProducts(category, backEnd));
  return (
    <>
      <section className={style.detailProduct}>
        <Container>
          <h1 className={style.hiddenTitle}>Details of product</h1>
          <BigCardProduct product={product} composition={getCompositionProduct(product)} />
        </Container>
      </section>
      <section className={style.recommendationProduct}>
        <Container>
          <h2 className={style.title}>Recommend to this product</h2>
          <Carousel
            products={getRecommendationProducts(category, backEnd)}
            time="3000"
            button="true"
          />
        </Container>
      </section>
      <Description />
      <Footer />
    </>
  );
};
