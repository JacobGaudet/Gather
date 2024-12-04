import axios from 'axios';
import { NominatimChurch } from '../types';

const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org';

export const fetchNearbyChurches = async (
  latitude: number,
  longitude: number
): Promise<NominatimChurch[]> => {
  try {
    const response = await axios.get(`${NOMINATIM_BASE_URL}/search`, {
      params: {
        q: 'church',
        format: 'json',
        lat: latitude,
        lon: longitude,
        zoom: 10,
        addressdetails: 1,
      },
      headers: {
        'User-Agent': 'YourAppName/1.0 (your.email@example.com)', // Replace with your app details
      },
    });

    // Explicitly cast response data to NominatimChurch[]
    return response.data as NominatimChurch[];
  } catch (error) {
    console.error('Error fetching churches:', error);
    throw error;
  }
};
