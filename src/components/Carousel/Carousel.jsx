import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AliceCarousel from 'react-alice-carousel';

import { LittleCardProduct } from 'components/LittleCardProduct';
import { colors } from 'constants';

import 'react-alice-carousel/lib/alice-carousel.css';
import style from './Carousel.module.scss';

export const Carousel = ({ products, time, button = false }) => {
  // console.log(products);

  const loading = false; /////////////////////////////////////////////////
  return (
    <>
      {loading ? (
        <>
          <Skeleton variant="rectangular" width={91} height={127} />
          <Skeleton variant="rectangular" width={91} height={127} />
        </>
      ) : (
        <div className={style.carouselBox}>
          {' '}
          <AliceCarousel
            autoPlay
            responsive={{ 0: { items: 2 }, 1920: { items: 3 } }}
            autoPlayStrategy="none"
            autoPlayInterval={time}
            animationDuration={300}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            renderNextButton={() => {
              return (
                <IconButton aria-label="next" sx={styles.forNextButtons}>
                  <ArrowForwardIosIcon fontSize="medium" />
                </IconButton>
              );
            }}
            renderPrevButton={() => {
              return (
                <IconButton aria-label="back" sx={styles.forPrevButtons}>
                  <ArrowBackIosIcon fontSize="medium" />
                </IconButton>
              );
            }}
            items={products.map(({ productId, fullName, price, smallImage }) => {
              return (
                <div key={productId} className={style.productsItem}>
                  <LittleCardProduct
                    id={productId}
                    fullName={fullName}
                    smallImage={smallImage}
                    price={price}
                    button={button}
                  />
                </div>
              );
            })}
          />
        </div>
      )}
    </>
  );
};

const styles = {
  forPrevButtons: {
    bgcolor: colors.MAIN_DARK_COLOR,
    width: '38px',
    height: '38px',
    color: colors.MAIN_LIGHT_COLOR,
    position: 'absolute',
    top: '60px',
    left: '-32px',
    paddingLeft: '15px',
    ':hover': {
      bgcolor: colors.MAIN_DARK_COLOR,
    },
    ':focus': {
      bgcolor: colors.MAIN_DARK_COLOR,
    },
  },

  forNextButtons: {
    bgcolor: colors.MAIN_DARK_COLOR,
    width: '38px',
    height: '38px',
    color: colors.MAIN_LIGHT_COLOR,
    position: 'absolute',
    top: '60px',
    right: '-32px',
    ':hover': {
      bgcolor: colors.MAIN_DARK_COLOR,
    },
    ':focus': {
      bgcolor: colors.MAIN_DARK_COLOR,
    },
  },
};
