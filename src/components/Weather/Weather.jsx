import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIcon } from '../../utils/icon-utils';
import './Weather.scss';

const Weather = ({ weather, day }) => (
  <div className='app__weather'>
    <div className='weather__temperature'>
      {weather.days[day].temperature}°C
      <div className='weather__description'>
        {weather.days[day].description}
      </div>
    </div>
    <div>
      <img className='weather__img' src={getIcon(weather.days, day)} alt={weather.days[day].description} />
    </div>
  </div>
);

Weather.propTypes = {
  weather: PropTypes.objectOf(PropTypes.array),
  day: PropTypes.number.isRequired,
};

Weather.defaultProps = { weather: {} };

const mapStateToProps = (state) => ({ weather: state.weather });

export default connect(mapStateToProps, null)(Weather);
