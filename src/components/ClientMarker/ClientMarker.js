import { Marker } from '@react-google-maps/api';

export const ClientMarker = ({ position }) => {
  return (
    <>
      <Marker position={position} icon={{ url: './pin.svg' }} />
    </>
  );
};
