import { WeatherAllData } from '@/thunk/allWeathersThunk';
import { IWeather } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WeatherState {
    allWeathers: IWeather[] | null;
    allWeathersLoading: boolean;
}

const initialState: WeatherState = {
    allWeathers: null,
    allWeathersLoading: false,
};

export const allWeathersSlice = createSlice({
  name: 'allWeathers',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(WeatherAllData.pending, (state) => {
        state.allWeathersLoading = true;
      })
      .addCase(WeatherAllData.fulfilled, (state, action: PayloadAction<IWeather[]>) => {                
        state.allWeathers = action.payload;
        state.allWeathersLoading = false;
      })
      .addCase(WeatherAllData.rejected, (state) => {
        state.allWeathersLoading = false;
        state.allWeathers = []
      });
  },
});

export const { } = allWeathersSlice.actions;
export default allWeathersSlice.reducer;
