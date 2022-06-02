import { useCallback, useEffect, useState } from 'react';
import { useJsApiLoader, DistanceMatrixService } from '@react-google-maps/api';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Map } from 'components/Map';
import { Autocomplete } from 'components/Autocomplete';
import { FullCart } from 'components/FullCart';
import { EmptyCart } from 'components/EmptyCart';
import { Container } from 'components/Container';
import { FooterNavigation } from 'components/FooterNavigation';
import { CustomLink } from 'components/CustomLink';
import { LittleMap } from 'components/LittleMap';

import { getBrowserLocation } from 'utils/geo';
import { GEO_POSITIONS_SHOPS, deliveryOptions, priceOptions } from 'constants';

import style from './CartPage.module.scss';

import { state } from 'state.js';
const API_KEY = process.env.REACT_APP_API_KEY;

const libraries = ['places'];

export const CartPage = () => {
  const [center, setCenter] = useState(GEO_POSITIONS_SHOPS);
  const [marker, setMarker] = useState(GEO_POSITIONS_SHOPS);
  const [minutes, setMinutes] = useState('');
  const [hours, setHours] = useState('');
  const [choiceAddress, setChoiceAddress] = useState(false);

  useEffect(() => {
    getBrowserLocation()
      .then(curLoc => {
        if (marker.lat === GEO_POSITIONS_SHOPS.lat && marker.lng === GEO_POSITIONS_SHOPS.lng) {
          setMarker({ lat: curLoc.lat, lng: curLoc.lng });
        }
      })
      .catch(GEO_POSITIONS_SHOPS => {
        console.log('i dont now your coordinates, click on map please');
        setMarker(GEO_POSITIONS_SHOPS);
      });
  }, [marker]);

  const getValidDuration = response => {
    const duration = response.rows[0].elements[0].duration.value;
    if (duration > deliveryOptions.MAX_DURATION) {
      setMinutes('');
      setHours('');
    }

    const totalDuration = duration + deliveryOptions.COOKING_TIME;
    const hours = Math.floor(totalDuration / 60 / 60);
    const minutes = Math.ceil(totalDuration / 60) - hours * 60;
    setMinutes(minutes);
    setHours(hours);
    console.log(`minutes`, minutes);
    console.log('hours', hours);
  };

  const getValidTime = () => {
    return hours > 0 ? `${hours} hours ${minutes} minutes` : `${minutes} minutes`;
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback(coordinates => {
    setCenter(coordinates);
  }, []);

  const onMarkerAdd = coordinates => {
    setMarker(coordinates);
  };

  const toggleChoice = () => {
    setChoiceAddress(!choiceAddress);
  };
  return (
    <>
      {state.cart[0] ? <FullCart /> : <EmptyCart />}
      <section className={style.mapSection}>
        <Container>
          <div className={style.addressBox}>
            <div className={style.ruleFreeShipping}>
              <p>{`Free shipping from ${priceOptions.AMOUNT_FOR_FREE_SHIPPING} USD`}</p>
            </div>
            {choiceAddress && (
              <>
                <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
                <div className={style.timeForDelivery}>
                  <AccessTimeIcon sx={styles.forTimeIcon} />
                  <div>
                    <p>{getValidTime()}</p>
                    <p>{`Minimum order amount ${priceOptions.MIN_AMOUNT_ORDERS} USD`}</p>
                  </div>
                </div>
              </>
            )}
          </div>
          {choiceAddress ? (
            <>
              {isLoaded ? (
                <>
                  <Map center={center} marker={marker} onMarkerAdd={onMarkerAdd} />
                  <DistanceMatrixService
                    options={{
                      destinations: [{ lat: marker.lat, lng: marker.lng }],
                      origins: [{ lat: GEO_POSITIONS_SHOPS.lat, lng: GEO_POSITIONS_SHOPS.lng }],
                      travelMode: 'DRIVING',
                    }}
                    callback={getValidDuration}
                  />
                </>
              ) : (
                <h2>{`Loading...${loadError}`}</h2>
              )}
            </>
          ) : (
            <>
              <button type="button" onClick={toggleChoice} className={style.buttonToggleChoice}>
                <div className={style.littleMapBox}>
                  <LittleMap center={center} />
                  <div className={style.iconBox}>
                    <LocationOnIcon sx={styles.forIconLocal} />
                  </div>
                </div>
                <p className={style.titleLittleMap}>Enter the address</p>
                <p className={style.textLittleMap}>And find out the delivery time</p>
              </button>
            </>
          )}
        </Container>
      </section>
      <div className={style.linkBox}>
        {state.cart[0] ? (
          <CustomLink href="/checkout" content="Checkout" />
        ) : (
          <CustomLink href="/" content="View menu" />
        )}
      </div>

      <FooterNavigation />
    </>
  );
};

const styles = {
  forTimeIcon: {
    marginRight: '9px',
  },
  forIconLocal: {
    width: '38px',
    height: '38px',
  },
};
