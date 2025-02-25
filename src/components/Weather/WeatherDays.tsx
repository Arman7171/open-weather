import React from "react";
import WeatherCard from "../Cards/WeatherCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IWeather } from "@/types/types";
import './style.css'

interface PropsType {
  weatherData: IWeather[];
}

const WeatherDays: React.FC<PropsType> = ({ weatherData }) => {
  const {currentWeather} = useSelector((state: RootState) => state.weather)

  const groupedWeather: Record<string, IWeather> = {};
  weatherData.forEach((weather) => {
    const date = new Date(weather.dt * 1000).toISOString().split("T")[0];
    if (!groupedWeather[date]) {
      groupedWeather[date] = weather;
    }
  });  

  return (
    <div className="weathers-container">
        {Object.values(groupedWeather).slice(0, 5).map((item) => {
         const itemDate = new Date(item.dt * 1000).toISOString().split("T")[0];
         const selectedDate = new Date(currentWeather.dt * 1000).toISOString().split("T")[0];
          return(<WeatherCard weather={item} active={itemDate===selectedDate} key={item.dt} />)
        })}
    </div>
  );
};

export default WeatherDays;
