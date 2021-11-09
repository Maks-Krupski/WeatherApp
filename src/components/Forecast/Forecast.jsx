import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import rainImg from '../../assets/images/rain.png';
import cloudsImg from '../../assets/images/cloud.png';
import humidityImg from '../../assets/images/humidity.png';
import pressureImg from '../../assets/images/barometer.png';
import './Forecast.scss';

const Forecast = ({ weather, day }) => {
  const { t } = useTranslation();

  return (
    <div className='app__forecast'>
      <div>
        <span>
          <img className='forecast__img' src={humidityImg} alt={t('humidity')} />
          {t('humidity')}
        </span>
        {weather.days[day].humidity}%
      </div>
      <div>
        <span>
          <img className='forecast__img' src={cloudsImg} alt={t('clouds')} />
          {t('clouds')}
        </span>
        {weather.days[day].cloud}%
      </div>
      <div>
        <span>
          <img className='forecast__img' src={rainImg} alt={t('rain')} />
          {t('rain')}
        </span>
        {weather.days[day].rain}%
      </div>
      <div>
        <span>
          <img className='forecast__img' src={pressureImg} alt={t('pressure')} />
          {t('pressure')}
        </span>
        {weather.days[day].pressure} mm Hg
      </div>
    </div>
  );
};

Forecast.propTypes = {
  weather: PropTypes.objectOf(PropTypes.array),
  day: PropTypes.number.isRequired,
};

Forecast.defaultProps = { weather: {} };

const mapStateToProps = (state) => ({ weather: state.weather });

export default connect(mapStateToProps, null)(Forecast);
