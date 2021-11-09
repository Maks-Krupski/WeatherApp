import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './GeolocationButton.scss';

const GeolocationButton = ({ language, getWeather }) => {
  const { t } = useTranslation();

  const getCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        getWeather(latitude, longitude, language);
      });
    }
  };

  return (
    <button type='button' className='geolocation__btn' onClick={getCoords}>{t('geolocationBtn')}</button>
  );
};

GeolocationButton.propTypes = {
  language: PropTypes.string.isRequired,
  getWeather: PropTypes.func.isRequired,
};

export default GeolocationButton;
