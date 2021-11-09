import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { currentTime } from "../../utils/time-utils";
import './CurrentDate.scss';

const CurrentDate = ({ day, date, timezone }) => {
  const [currentDate, setCurrentdate] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => setCurrentdate(new Date()), 1000);

    return function cleanup() {
      clearInterval(time);
    };
  }, []);

  return (
    <div className='app__clock'>
      {day === 0 ? `${currentTime(currentDate, timezone).time} | ${currentTime(currentDate, timezone).curDate}` : date}
    </div>
  );
};

CurrentDate.propTypes = {
  day: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  timezone: PropTypes.number.isRequired,
};

export default CurrentDate;
