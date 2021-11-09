export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CLEAR = 'CLEAR';
export const SET_VALUE = 'SET_VALUE';
export const ADD_VALUE = 'ADD_VALUE';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const clear = () => ({ type: CLEAR });
export const setValue = (value) => ({ type: SET_VALUE, payload: value });
export const addValue = (value) => ({ type: ADD_VALUE, payload: value });
