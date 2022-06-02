import { useCallback, useRef, useEffect } from 'react';
import { GoogleMap, MarkerClusterer } from '@react-google-maps/api';

import { CurrentLocationMarker } from 'components/CurrentLocationMarker';
import { ClientMarker } from 'components/ClientMarker';
import { GEO_POSITIONS_SHOPS } from 'constants';
import { defaultTheme } from './Theme';
import style from './Map.module.scss';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIconsControl: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

export const Map = ({ center, marker, onMarkerAdd }) => {
  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const handlerClick = useCallback(
    location => {
      const lat = location.latLng.lat();
      const lng = location.latLng.lng();
      onMarkerAdd({ lat, lng });
    },
    [onMarkerAdd],
  );

  return (
    <>
      <div className={style.mapWrapper}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={handlerClick}
          options={defaultOptions}
        >
          <CurrentLocationMarker position={center} />
          <ClientMarker position={marker} />;
        </GoogleMap>
      </div>
    </>
  );
};
