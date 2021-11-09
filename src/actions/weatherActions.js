import WeatherApi from '../api/weatherApi/provider';
import CityApi from '../api/cityApi/provider';

export const DELETE_WEATHER = 'DELETE_WEATHER';
export const GET_WEATHER = 'GET_WEATHER';

export const deleteWeather = () => ({ type: DELETE_WEATHER });
export const getWeather = (value) => ({ type: GET_WEATHER, payload: value });

export const getCurrentWeatherThunk = (lat, lon, language) => async (dispatch) => {
  await CityApi.getСity(lat, lon, language)
    .then((city) => WeatherApi.getСityWeather(city, language))
    .then((data) => dispatch(getWeather(data)));
};

export const getWeatherThunk = (city, language) => async (dispatch) => {
  await WeatherApi.getСityWeather(city, language)
    .then((data) => dispatch(getWeather(data)));
};
