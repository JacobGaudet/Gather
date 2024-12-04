import React, { useEffect, useState } from 'react';
import { fetchNearbyChurches } from '../services/api';
import { getCurrentLocation } from '../utils/geolocation';
import MapView from '../components/MapView';
import ChurchList from '../components/ChurchList';
import { NominatimChurch } from '../types';

const ChurchesPage: React.FC = () => {
  const [churches, setChurches] = useState<NominatimChurch[]>([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { latitude, longitude } = await getCurrentLocation();
        setLocation({ lat: latitude, lng: longitude });

        const nearbyChurches = await fetchNearbyChurches(latitude, longitude);
        setChurches(nearbyChurches); // No more type error here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Churches Near You</h1>
      {location && <MapView churches={churches} center={location} />}
      <ChurchList churches={churches} />
    </div>
  );
};

export default ChurchesPage;
