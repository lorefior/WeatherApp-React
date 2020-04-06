import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    RAIN, 
    SNOW ,
    SUN, 
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';
import  './styles.css';

const icons ={
 [SUN]: "day-sunny",
 [CLOUD]: "cloud",
 [RAIN]: "rain",
 [SNOW]: "snow",
 [DRIZZLE]: "day-showers",
 [THUNDER]: "day-thunderstorm"
};

const getWeatherIcon =  weatherState => {
  const icon = icons[weatherState];

  const sizeIcon = "4x";

  if (icon)
    return  <WeatherIcons className="wicon" name={icon} size="3x" />;
  else
    return  <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />;
}
    
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont"> 
        {
          getWeatherIcon(weatherState)
        }
        <span className="temperature"> {`${temperature}`} </span> 
        <span className="temperatureType"> { `C° `}  </span>  
    
    </div>
    ); 
    
    WeatherTemperature.propTypes = {
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,

    };
    
export default WeatherTemperature;