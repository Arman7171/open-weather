import React, { useMemo } from "react";
import { tempConverter } from "@/utils/tempConverter";
import { IWeather } from "@/types/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Temp } from "@/types/enums";
import './style.css'

interface PropsType {
  weatherData: IWeather;
}

const CurrentWeather: React.FC<PropsType> = ({ weatherData }) => {
  const { showTempWith, city } = useSelector((state: RootState) => state.weather);
  const convertedTemp = useMemo(() => {    
    return tempConverter(weatherData.main.temp, showTempWith);
  }, [showTempWith, weatherData]);
  
  return (
    <div className="current-weather-container">
      <h1>{weatherData.name || city}</h1>
      <div>{convertedTemp}{Temp[showTempWith]}</div>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        alt="weather"
        className="weather-icon-big"
      />
      <p>{weatherData.weather[0].main}</p>
    </div>
  );
};

export default CurrentWeather;
