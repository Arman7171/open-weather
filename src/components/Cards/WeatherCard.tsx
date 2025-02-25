import React from "react";
import { RootState } from "@/store/store";
import { Temp } from "@/types/enums";
import { IWeather } from "@/types/types";
import { tempConverter } from "@/utils/tempConverter";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrent } from "@/features/weatherSlice";
import "./style.css";

interface PropsType {
  weather: IWeather;
  active: boolean;
}

const WeatherCard: React.FC<PropsType> = ({ weather, active }) => {
  const { showTempWith } = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch()

  return (
    <div className={`card-container ${active ? "active" : ""}`} onClick={() => dispatch(changeCurrent(weather))}>
      <div>{weather.dt_txt.split(" ")[0].split("-").slice(1, 3).join("-")}</div>
      <div className="card-temp-content">
        <div className="temp">
          {tempConverter(weather.main.temp, showTempWith)}
          {Temp[showTempWith]}
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon-big"
        />
      </div>
    </div>
  );
};

export default WeatherCard;
