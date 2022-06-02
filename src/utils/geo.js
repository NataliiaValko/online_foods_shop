import { GEO_POSITIONS_SHOPS } from 'constants';

export const getBrowserLocation = () => {
  return new Promise((res, rej) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude: lat, longitude: lng } = pos.coords;
          res({ lat, lng });
        },
        () => {
          rej(GEO_POSITIONS_SHOPS);
        },
      );
    } else {
      rej(GEO_POSITIONS_SHOPS);
    }
  });
};
