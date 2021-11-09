import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DayWeather from './DayWeather/DayWeather';
import { getIcon } from '../../utils/icon-utils';
import './WeekWeather.scss';

const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeekWeather = ({ weather, day, changeDay }) => {
  let currentDay = new Date().getDay();
  const days = [];
  const daysWeather = weather.days;
  const nightsWeather = weather.days;

  for (let i = 0; i < 6; i++) {
    if (!days.includes(daysMap[currentDay]) && currentDay < daysMap.length) {
      days.push(daysMap[currentDay]);
      currentDay += 1;
    } else if (currentDay === 7) {
      currentDay = 0;
      days.push(daysMap[currentDay]);
      currentDay += 1;
    }
  }

  const dayList = daysWeather.map((item, index) => (
    <DayWeather
      key={days[index]}
      curTemperature={item.temperature}
      nightTemperature={nightsWeather[index].temperature}
      dayName={days[index]}
      icon={getIcon(daysWeather, index)}
      date={item.date}
      dayNumber={index}
      description={item.description}
      day={day}
      changeDay={changeDay}
    />
  ));

  return (
    <div className='week-weather'>
      {dayList}
    </div>
  );
};

WeekWeather.propTypes = {
  weather: PropTypes.objectOf(PropTypes.array),
  day: PropTypes.number.isRequired,
  changeDay: PropTypes.func.isRequired,
};
WeekWeather.defaultProps = { weather: {} };

const mapStateToProps = (state) => ({ weather: state.weather });

export default connect(mapStateToProps, null)(WeekWeather);
