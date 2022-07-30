import React, { createContext, useState, useEffect, useContext} from 'react'
import { LocationContext } from './LocationContextProvider';
import axios from 'axios';

export const CurrentWeatherContext = createContext();

const CurrentWeatherContextProvider = (props) => {

    const locationContext = useContext(LocationContext);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [hourWeather, setHourWeather] = useState([]);

  
  useEffect(() => {
   
    const location = locationContext.location;
    if(location){
    let { lat, lon } = location.position;

      const url = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat}&q=${lon}&aqi=no&alerts=no`;
      axios.get(url)
      
        
        .then(result => {
         
          setCurrentWeather({dailyData: result.data})
         })
          .catch(function (error) {
                    console.log(error);
                })
        }
       
    
  }, [locationContext.location]);


  useEffect(() => {
   
    const location = locationContext.location;
    if(location){
    let { lat, lon } = location.position;

      const url = `${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${lat}&q=${lon}&q=hour&aqi=no&alerts=no`;
      axios.get(url)
      
        
        .then(result => {
          // console.log(result);
          setHourWeather({hourlyData: result.data.forecast.forecastday[0].hour});
          console.log(result.data.forecast.forecastday[0]);
         })
          .catch(function (error) {
                    console.log(error);
                })
        }
       
    
  }, [locationContext.location]);



  return (
    <CurrentWeatherContext.Provider value={{currentWeather, setCurrentWeather, hourWeather, setHourWeather}}>
{props.children}
    </CurrentWeatherContext.Provider>
  )
}

export default CurrentWeatherContextProvider