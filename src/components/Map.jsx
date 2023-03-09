import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const Map = ({ geo }) => {
  const { lat, lng } = geo;
  const position = [lat, lng]; // latitude, longitude

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
};

export default Map;
