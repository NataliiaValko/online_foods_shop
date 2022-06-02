import { useCallback, useRef } from 'react';
import { GoogleMap } from '@react-google-maps/api';

import { CurrentLocationMarker } from 'components/CurrentLocationMarker';
import { defaultTheme } from './Theme';
import style from './LittleMap.module.scss';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultOptions = {
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIconsControl: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

export const LittleMap = ({ center }) => {
  const mapRef = useRef(undefined);
  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  return (
    <>
      <div className={style.mapWrapper}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={center}
          zoom={9}
          options={defaultOptions}
        >
          <CurrentLocationMarker position={center} />
        </GoogleMap>
      </div>
    </>
  );
};
