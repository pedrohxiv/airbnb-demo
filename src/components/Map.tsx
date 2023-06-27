'use client';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { getCenter } from 'geolib';

interface SearchResult {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export default function Map({ searchResults }: { searchResults: SearchResult[] }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.api_key}`,
  });

  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="h-full w-full"
      center={{
        lat: center ? center.latitude - 0.2 : 0,
        lng: center ? center.longitude : 0,
      }}
      zoom={11}
    >
      {searchResults.map((result) => (
        <div key={result.lat}>
          <Marker position={{ lat: result.lat, lng: result.long }} />
        </div>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}
