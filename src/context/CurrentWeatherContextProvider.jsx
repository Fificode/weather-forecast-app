import React, { createContext, useState, useEffect, useContext} from 'react'
import { LocationContext } from './LocationContextProvider';
import axios from 'axios';

export const CurrentWeatherContext = createContext();

const CurrentWeatherContextProvider = (props) => {

    const locationContext = useContext(LocationContext);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [hourWeather, setHourWeather] = useState(null);
     const [tomorrowWeather, setTomorrowWeather] = useState('');

 
  //Fetch current weather location
  useEffect(() => {
   
    const location = locationContext.location;
    if(location){
    let { latitude, longitude } = location.position;

      const url = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude}&q=${longitude}&aqi=no&alerts=no`;
      axios.get(url)
      
        
        .then(result => {
        //  console.log(result.data)
          setCurrentWeather({dailyData: result.data})
         })
          .catch(function (error) {
                    console.log(error);
                })
        }
       
 }, [locationContext.location]);

//Fetch today's weather location hourly
 useEffect(() => {

  const location = locationContext.location;
    if(location){
    let { latitude, longitude } = location.position;

      const url = `${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude}&q=${longitude}&q=hour&aqi=no&alerts=no`;
      axios.get(url)
      .then(result => {
          // console.log(result.data.forecast.forecastday[0].hour);
          setHourWeather({hourlyData: result.data.forecast.forecastday[0].hour});
          })
          .catch(function (error) {
                    console.log(error);
                })
        }
      
    }, [locationContext.location]);



 //Fetch Tomorrow's weather location hourly
  useEffect(() => {

    const location = locationContext.location;

    if (location) {
      let { latitude, longitude } = location.position;

      const url = `${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude}&q=${longitude}&q=hour&days=2&aqi=no&alerts=no`;
      axios.get(url)
        .then(result => {
           console.log(result.data);
          setTomorrowWeather({tomorrowsData: result.data.forecast.forecastday[1].hour});
          
        })
        .catch(function (error) {
          console.log(error);
        })
    }

}, [locationContext.location]);

 


  return (
    <CurrentWeatherContext.Provider value={{currentWeather, setCurrentWeather, hourWeather, setHourWeather, tomorrowWeather, setTomorrowWeather}}>
{props.children}
    </CurrentWeatherContext.Provider>
  )
}

export default CurrentWeatherContextProvider