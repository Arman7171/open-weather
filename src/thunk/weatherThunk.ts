import { API_KEY } from "@/types/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const WeatherCurrentData = createAsyncThunk(
  "weather/fetchCurrent",
  async (city: string, { rejectWithValue }) => {
    try {      
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      return response.data;
    } catch (error) {      
      return rejectWithValue(error.response.data);
    }
  }
);