import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { getCurrentWeatherThunk, getWeatherThunk, deleteWeather } from '../../actions/weatherActions';
import Error from '../../components/Error/Error';
import Forecast from '../../components/Forecast/Forecast';
import GeolocationButton from '../../components/GeolocationButton/GeolocationButton';
import Loader from '../../components/Loader/Loader';
import WeatherMap from '../../components/WeatherMap/WeatherMap';
import Place from '../../components/Place/Place';
import Search from '../../components/Search/Search';
import Weather from '../../components/Weather/Weather';
import WeekWeather from '../../components/WeekWeather/WeekWeather';
import { getBackground } from '../../utils/time-utils';
import './App.scss';

const App = ({ weather }) => {
  const [inputValue, setInputValue] = useState('');
  const [day, setDay] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [lang, setLang] = useState('en');
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const getCurrentCityWeather = (lat, lon, language) => {
    setLoading(true);
    setError(false);
    dispatch(deleteWeather());

    const getForecast = async () => dispatch(getCurrentWeatherThunk(lat, lon, language));

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

  const cityWeather = (searcedCity, language) => {
    setLoading(true);
    setError(false);
    dispatch(deleteWeather());

    const getForecast = async () => dispatch(getWeatherThunk(searcedCity, language));

    getForecast()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        dispatch(deleteWeather());
        setLoading(false);
        setError(true);
      });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event, language) => {
    event.preventDefault();

    /* const city = event.target.elements.city.value; */

    cityWeather(inputValue, language);
    setInputValue('');
  };

  const handleDayChange = (dayNumber) => {
    setDay(dayNumber);
  };

  const handleChangeLanguage = (language) => {
    setLang(language);
    i18n.changeLanguage(language);

    if (weather.days[0].city) {
      cityWeather(weather.days[0].city, language);

      console.log('changed');
    }
  };

  return (
    <div className={`app ${weather ? getBackground(weather.days[1].sunrise, weather.days[1].sunset, weather.days[1].timezone) : 'app-day'}`}>
      {!isLoading && (
        <Search onSubmit={(event) => handleSubmit(event, lang)} onChange={handleChange} value={inputValue}>
          {weather && <GeolocationButton language={lang} getWeather={getCurrentCityWeather} />}
        </Search>
      ) }
      {!weather && !isLoading && <GeolocationButton language={lang} getWeather={getCurrentCityWeather} />}
      {isLoading && <Loader />}
      {isError && <Error />}
      {weather && (
      <>
        <div className='app__block'>
          <div className='app__place-block'>
            <Weather day={day} />
            <Place day={day} />
          </div>
          <Forecast day={day} />
        </div>
        <div className='app__weather-block'>
          <WeatherMap
            lat={weather.days[0].coords.lat}
            lon={weather.days[0].coords.lon}
            wind={weather.days[day].wind}
            windDirection={weather.days[day].windDirection}
          />
          <WeekWeather day={day} changeDay={handleDayChange} />
        </div>
        <div className='lang-change__btns'>
          <button className={`lang-change__btn ${lang === 'en' && 'lang-change__btn-active'}`} onClick={() => handleChangeLanguage('en')}>En</button>
          <button className={`lang-change__btn ${lang === 'ru' && 'lang-change__btn-active'}`} onClick={() => handleChangeLanguage('ru')}>Ru</button>
        </div>
      </>
      )}
    </div>
  );
};

App.propTypes = { weather: PropTypes.objectOf(PropTypes.array) };
App.defaultProps = { weather: {} };

const mapStateToProps = (state) => ({ weather: state.weather });

export default connect(mapStateToProps, null)(App);
