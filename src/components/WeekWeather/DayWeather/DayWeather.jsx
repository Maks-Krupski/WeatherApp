import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './DayWeather.scss';

const DayWeather = ({
  curTemperature,
  nightTemperature,
  dayName,
  icon,
  date,
  dayNumber,
  description,
  day,
  changeDay,
}) => {
  const { t } = useTranslation();

  return (
    <div className='day__weather'>
      <div className='day__name'>{t(`${dayName}`)}</div>
      <div className='day__date'>{date}</div>
      <div className='day__temperature'>
        {curTemperature}°C {dayNumber !== 0 && <span className='day__night-temperature'>/ {nightTemperature}°C</span>}
      </div>
      <img src={icon} alt={description} />
      <button className={`day__btn ${day === dayNumber ? 'active' : ''}`} onClick={() => changeDay(dayNumber)}>{t('show')}</button>
    </div>
  );
};

DayWeather.propTypes = {
  curTemperature: PropTypes.number.isRequired,
  nightTemperature: PropTypes.number.isRequired,
  dayName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  dayNumber: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  changeDay: PropTypes.func.isRequired,
};

export default DayWeather;
