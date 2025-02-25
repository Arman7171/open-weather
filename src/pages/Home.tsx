import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { WeatherCurrentData } from "@/thunk/weatherThunk";
import { WeatherAllData } from "@/thunk/allWeathersThunk";
import CurrentWeatherWithTime from "@/components/Weather/CurrentWeatherWithTime";
import CurrentWeather from "@/components/Weather/CurrentWeather";
import WeatherDays from "@/components/Weather/WeatherDays";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "@/components/Header/Header";
import Popup from "@/components/Popup/Popup";
import './style.css'

const Home = () => {
  const {currentWeather, currentWeatherLoading, city} = useSelector((state: RootState) => state.weather)
  const {allWeathers, allWeathersLoading} = useSelector((state: RootState) => state.allWeathers)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    dispatch(WeatherCurrentData(city || 'Yerevan'))
    dispatch(WeatherAllData(city || 'Yerevan'))
  },[city])

  useEffect(() => {
    if(allWeathers && allWeathers.length===0 && !allWeathersLoading) setIsOpen(true)
  },[allWeathers, allWeathersLoading])

  return (
    <div>
      <Header />
      {currentWeatherLoading || currentWeather===null || allWeathers===null || allWeathersLoading ? (
        <div className="loader-content">
          <ClipLoader color="#73048f" className="" size={30} speedMultiplier={1} />
        </div>
      ) : (
        <div className="blocks-container">
          <div className="weather-showing-content">
            {allWeathers.length!==0 && <CurrentWeather weatherData={currentWeather} />}
            <CurrentWeatherWithTime weatherData={allWeathers} />
          </div>
          <div>
            <WeatherDays weatherData={allWeathers} />
          </div>
        </div>)}
        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            Nothing not found by this city
          </div>
        </Popup>
    </div>
  );
};

export default Home;
