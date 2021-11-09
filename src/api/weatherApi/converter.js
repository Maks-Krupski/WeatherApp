import { Weather } from '../../entities/weather';

export const converter = (cityWeather) => cityWeather.list.reduce((acc, item) => {
  acc.push(new Weather({
    description: item.weather[0].description,
    temperature: Math.round(item.main.temp) - 273,
    cloud: item.clouds.all,
    humidity: item.main.humidity,
    wind: (item.wind.speed * 3).toFixed(1),
    windDirection: item.wind.deg,
    pressure: Math.round(item.main.pressure / 1.333),
    rain: (item.pop * 100).toFixed(),
    icon: item.weather[0].icon,
    date: dateConverter(item.dt_txt.split(' ')[0]),
    forecastTime: item.dt_txt.split(' ')[1],
    city: cityWeather.city.name,
    country: cityWeather.city.country,
    coords: { lon: cityWeather.city.coord.lon, lat: cityWeather.city.coord.lat },
    timezone: cityWeather.city.timezone / 3600,
    sunrise: cityWeather.city.sunrise * 1000,
    sunset: cityWeather.city.sunset * 1000,
  }));

  return acc;
}, []);

function dateConverter(dateStr) {
  const dateArr = dateStr.split('-');
  const dd = dateArr[2];
  const mm = dateArr[1];
  const yyyy = dateArr[0];

  return `${dd}.${mm}.${yyyy}`;
}

export const weatherFilter = (array) => {
  const filteredArr = array.reduce((acc, item, index) => {
    if (index === 0) {
      acc.days.push(item);
    } else if (acc.days.length < 5 && item.forecastTime === '03:00:00') {
      acc.nights.push(item);
    } else if (acc.days.length < 5 && item.forecastTime === '15:00:00') {
      acc.days.push(item);
    }

    return acc;
  }, { days: [], nights: [] });

  return filteredArr;
};
