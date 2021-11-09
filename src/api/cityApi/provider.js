import { cityApiUrl } from '../../constants/urls';
import { converterCity } from './converterCity';

class CityApi {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  async getСity(lat, lon) {
    return fetch(`${this.url}?lat=${lat}&lon=${lon}&limit=4&appid=${this.token}`)
      .then((response) => response.json())
      .then((response) => converterCity(response));
  }
}

export default new CityApi({ url: cityApiUrl, token: '5ed36f1aa00099a504724fe8f622dd14&' });
