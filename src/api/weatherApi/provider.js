import { weatherApiUrl } from '../../constants/urls';
import { converter, weatherFilter } from './converter';

class WeatherApi {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  async getСityWeather(city, language) {
    return fetch(`${this.url}?q=${city}&lang=${language}&appid=${this.token}`)
      .then((response) => response.json())
      .then((responseData) => weatherFilter(converter(responseData)));
  }
}

export default new WeatherApi({ url: weatherApiUrl, token: '5ed36f1aa00099a504724fe8f622dd14&' });
