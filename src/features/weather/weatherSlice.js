import { createSlice } from "@reduxjs/toolkit";
import { weatherReducer } from "../../reducers/weatherReducer";

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: { tasks: [] },
  reducers: { weatherReducer },
});
