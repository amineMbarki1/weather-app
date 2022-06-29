/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect } from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

interface Location {
  lat: number;
  long: number;
}

export const WeatherContext = createContext({});

const WeatherProvider: React.FC<Props> = ({ children }) => {
  const [location, setLocation] = useState<Location | string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<any>({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      setLocation({ lat, long });
    });
  }, []);
  useEffect(() => {
    console.log('location was set');
    console.log('loading ....');
    console.log('fetching data');
  }, [location]);

  return (
    <WeatherContext.Provider value={{ location, setLocation, loading }}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
