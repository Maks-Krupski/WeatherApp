export class Weather {
  constructor({
    description,
    temperature,
    cloud,
    humidity,
    wind,
    windDirection,
    pressure,
    rain,
    icon,
    date,
    forecastTime,
    city,
    country,
    coords,
    timezone,
    sunrise,
    sunset,
  }) {
    this.description = description;
    this.temperature = temperature;
    this.cloud = cloud;
    this.humidity = humidity;
    this.wind = wind;
    this.windDirection = windDirection;
    this.pressure = pressure;
    this.rain = rain;
    this.icon = icon;
    this.date = date;
    this.forecastTime = forecastTime;
    this.city = city;
    this.country = country;
    this.coords = coords;
    this.timezone = timezone;
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
}
