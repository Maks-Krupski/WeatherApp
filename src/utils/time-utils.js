export const currentTime = (currentDate, timezone) => {
  let hours = currentDate.getUTCHours() + timezone;
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let currentDay = currentDate.getUTCDate();

  if (hours >= 24) {
    hours -= 24;
    currentDay += 1;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  if (currentDay < 10) {
    currentDay = `0${currentDay}`;
  }

  const time = `${hours}:${minutes}:${seconds}`;
  const curDate = `${currentDay}.${month}.${year}`;
  const fullDate = {
    time,
    curDate,
  };

  return fullDate;
};

export const getBackground = (sunrise, sunset, timezone) => {
  let currentHour = new Date().getUTCHours() + timezone;
  const sunriseHour = new Date(sunrise).getHours();
  const sunsetHour = new Date(sunset).getHours();

  if (currentHour >= 24) {
    currentHour -= 24;
  }

  return currentHour >= sunsetHour || currentHour < sunriseHour ? 'app-night' : 'app-day';
};
