import weatherReducer from '@/features/weatherSlice'
import allWeathersReducer from '@/features/allWeathersSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    allWeathers: allWeathersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch