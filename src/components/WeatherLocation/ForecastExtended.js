import React, { Component }from 'react';
import ForecastItem from './../ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import transformForecast from './../../services/transdormForecast';


const api_key =  "6923a9fab87683fd11f395ec61766f31";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{
constructor(){
    super();
    this.state ={forecastData: null}
}


componentDidMount() {
    this.updateCity(this.props.city);
}

componentWillReceiveProps(newtProps){
  if(newtProps.city !== this.props.city){
      this.setState({forecastData: null})
      this.updateCity(newtProps.city);
  }
}

updateCity = city =>{
    const url_forecast =`${url}?q=${city}&appid=${api_key}`;
    fetch(url_forecast).then(
        data => (data.json()
        ).then(
            weather_data =>{
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData})
            }
        )
    );
}

    renderForecastItemDays(forecastData){
   
        return forecastData.map(forecast => (
        <ForecastItem 
           key={`${forecast.weekDay}${forecast.hour}`}
             weekDay={forecast.weekDay}
             hour={forecast.hour} 
             data={forecast.data}>

        </ForecastItem>))
    }

    render(){
        const {city} = this.props;
        const{forecastData} = this.state;
     return (
     <div className="details"> 
     
       <h2>Pronóstico Extendido para { city }</h2>
       {forecastData ?
         this.renderForecastItemDays(forecastData):
         <CircularProgress size={450} color="secondary"/>
         }
      
     </div>)
    }

};

ForecastExtended.propTpes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;