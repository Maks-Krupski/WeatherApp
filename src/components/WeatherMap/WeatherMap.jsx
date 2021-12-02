import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { YMaps, Map } from "react-yandex-maps";
import arrowImg from '../../assets/images/arrow.png';
import windImg from '../../assets/images/wind.png';
import './WeatherMap.scss';

const WeatherMap = ({ lat, lon, wind, windDirection }) => {
  const { t } = useTranslation();

  console.log(lat, lon);

  return (
    <div className='map'>
      <YMaps>
        <Map width='450px' defaultState={{ center: [lat, lon], zoom: 10 }} />
      </YMaps>
      <div className='map__message'>
        <div className='message'>
          <span className='message__wind'>
            <img className='wind__img' src={windImg} alt={t('wind')} />
            {t('wind')}
          </span>
          <span>{wind} {t('km/h')}</span>
        </div>
        <img className='arrow__img' style={{ transform: `rotate(${windDirection}deg)` }} src={arrowImg} alt='wind direction' />
      </div>
    </div>
  );
};

WeatherMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
  windDirection: PropTypes.number.isRequired,
};

export default WeatherMap;
