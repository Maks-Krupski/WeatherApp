import { DELETE_WEATHER, GET_WEATHER } from '../actions/weatherActions';

const initialState = { weather: null };

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_WEATHER:
      return {
        ...state,
        weather: null,
      };
    case GET_WEATHER:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};
