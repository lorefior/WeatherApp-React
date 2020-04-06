import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './index';
import'./styles.css';


const LocationList =({cities , onSelectedLocation}) =>{
  const handleWeatherLocationClick = city =>{
    onSelectedLocation(city);
  }
  const strToComponents = cities => (
    cities.map( (city) => 
       (
          <WeatherLocation 
              key={city} 
              city={city}
              onWeatherLocationClick={ () => handleWeatherLocationClick(city)}
                />))
   );

  return( <div className="locationList">
           {strToComponents(cities)}
         </div>);
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation:PropTypes.func,
}


export default LocationList;