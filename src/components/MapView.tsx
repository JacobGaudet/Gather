import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { NominatimChurch } from '../types';

interface MapViewProps {
  churches: NominatimChurch[];
  center: { lat: number; lng: number };
}

const containerStyle = {
  width: '100%',
  height: '400px',
};

const MapView: React.FC<MapViewProps> = ({ churches, center }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {churches.map((church, index) => (
          <Marker
            key={index}
            position={{
              lat: parseFloat(church.lat),
              lng: parseFloat(church.lon),
            }}
            title={church.display_name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
