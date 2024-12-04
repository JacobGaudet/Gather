import React from 'react';
import { NominatimChurch } from '../types';

interface ChurchListProps {
  churches: NominatimChurch[];
}

const ChurchList: React.FC<ChurchListProps> = ({ churches }) => {
  return (
    <ul>
      {churches.map((church, index) => (
        <li key={index}>
          <h3>{church.display_name}</h3>
          <p>Latitude: {church.lat}</p>
          <p>Longitude: {church.lon}</p>
        </li>
      ))}
    </ul>
  );
};

export default ChurchList;
