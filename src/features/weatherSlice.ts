import { WeatherCurrentData } from '@/thunk/weatherThunk'
import { IWeather } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'

export interface WeatherState {
    currentWeather: IWeather | null,
    currentWeatherLoading: boolean,
    showTempWith: string,
    city: string
}

const initialState: WeatherState = {
    currentWeather: null,
    currentWeatherLoading: false,
    showTempWith: 'c',
    city: 'Yerevan'
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeTemp: (state) => {
        state.showTempWith = state.showTempWith === 'c' ? 'f' : 'c'
    },
    changeCurrent: (state, action) => {
      state.currentWeather = action.payload
  },
  changeCity: (state, action) => {
    state.city = action.payload
},
  },
  extraReducers: (builder) => {
    builder
      .addCase(WeatherCurrentData.pending, (state) => {
        state.currentWeatherLoading = true
      })
      .addCase(WeatherCurrentData.fulfilled, (state, action) => {
        state.currentWeather = action.payload
        state.currentWeatherLoading = false
      })
      .addCase(WeatherCurrentData.rejected, (state, action) => {
        state.currentWeatherLoading = false
      });
  },
})

export const { changeTemp, changeCurrent, changeCity } = weatherSlice.actions

export default weatherSlice.reducer