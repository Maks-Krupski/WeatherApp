import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentDate from '../CurrentDate/CurrentDate';
import './Place.scss';

const Place = ({ weather, day }) => (
  <div className='app__place'>
    <h3 className='app__city'>{weather.days[day].city}, {weather.days[day].country}</h3>
    <CurrentDate day={day} date={weather.days[day].date} timezone={weather.days[0].timezone} />
  </div>
);

Place.propTypes = {
  day: PropTypes.number.isRequired,
  weather: PropTypes.objectOf(PropTypes.array),
};

Place.defaultProps = { weather: {} };

const mapStateToProps = (state) => ({ weather: state.weather });

export default connect(mapStateToProps, null)(Place);
