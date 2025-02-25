import { API_KEY } from "@/types/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const WeatherAllData = createAsyncThunk(
  "weather/fetchAll",
  async (city: string, { rejectWithValue }) => {
    try {      
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
      return response.data.list;
    } catch (error) {      
      return rejectWithValue(error.response.data);
    }
  }
);