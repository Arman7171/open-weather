import React, { useMemo } from "react";
import { tempConverter } from "@/utils/tempConverter";
import { IWeather } from "@/types/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Temp } from "@/types/enums";
import "./style.css";

interface PropsType {
  weatherData: IWeather[];
}

const CurrentWeatherWithTime: React.FC<PropsType> = ({ weatherData }) => {
  const { showTempWith } = useSelector((state: RootState) => state.weather);
  const { currentWeather } = useSelector((state: RootState) => state.weather);

  const selectedDate = new Date(currentWeather.dt * 1000)
    .toISOString()
    .split("T")[0];
  const filteredWeather = weatherData.filter((weather) => {
    const weatherDate = new Date(weather.dt * 1000).toISOString().split("T")[0];
    return weatherDate === selectedDate;
  });

  return (
    <div className="">
      {Object.values(filteredWeather).map((item) => {
        return (
          <div className={`weather-time`} key={item.dt}>
            <div>{item.dt_txt.split(" ")[1]}</div>
            <div className="card-temp-content">
              <div className="temp">
                {tempConverter(item.main.temp, showTempWith)}
                {Temp[showTempWith]}
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="weather"
                className="weather-icon-big"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentWeatherWithTime;
