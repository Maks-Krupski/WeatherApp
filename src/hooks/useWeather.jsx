import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentWeatherThunk, getWeatherThunk, deleteWeather } from '../actions/weatherActions';

const useWeather = () => {
  const [currentCity, setCurrentCity] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();

  const getCurrentCityWeather = (lat, lon) => {
    setLoading(true);
    dispatch(deleteWeather());

    const getForecast = async () => dispatch(getCurrentWeatherThunk(lat, lon));

    getForecast()
      .then(() => {
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  const cityWeather = (city) => {
    setLoading(true);
    setError(false);
    dispatch(deleteWeather());

    const getForecast = async () => dispatch(getWeatherThunk(city));

    getForecast()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        dispatch(deleteWeather());
        setCurrentCity(null);
        setLoading(false);
        setError(true);
      });
  };

  return {
    getCurrentCityWeather,
    cityWeather,
    currentCity,
    isLoading,
    isError,
  };
};

export default useWeather;
