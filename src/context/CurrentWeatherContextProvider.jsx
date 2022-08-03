import React, { createContext, useState, useEffect, useContext, useCallback} from 'react'
import { LocationContext } from './LocationContextProvider';
import axios from 'axios';

export const CurrentWeatherContext = createContext();

const CurrentWeatherContextProvider = (props) => {

    const locationContext = useContext(LocationContext);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [hourWeather, setHourWeather] = useState(null);
     const [tomorrowWeather, setTomorrowWeather] = useState('');
    
    // const [nextDaysWeather, setNextDaysWeather] = useState(null);
// const [isDisplayed, setIsDisplayed] = useState(false);
 
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
       

        
        // setIsDisplayed(prevState => !prevState);
    }, [locationContext.location]);

  //    useEffect(() => {
  //   handleTodayWeather();
  // }, [locationContext.location, handleTodayWeather]);

 //Fetch Tomorrow's weather location hourly
  const handleTomorrowWeather = useCallback(() => {

    const location = locationContext.location;

    if (location) {
      let { latitude, longitude } = location.position;

      const url = `${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude}&q=${longitude}&q=hour&q=tomorrow&days=1&aqi=no&alerts=no`;
      axios.get(url)
        .then(result => {
           console.log(result.data);
          setTomorrowWeather({tomorrowsData: result.data.forecast.forecastday[0].hour});
          
        })
        .catch(function (error) {
          console.log(error);
        })
    }

// setIsDisplayed(prevState => !prevState);

  }, [locationContext.location]);

  useEffect(() => {
    handleTomorrowWeather();
  }, [locationContext.location, handleTomorrowWeather]);

  

  //Fetch next days hourly weather conditions
// useEffect(() => {
   
//     const location = locationContext.location;
//     if(location){
//     let { latitude, longitude } = location.position;

//       const url = `${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude}&q=${longitude}&days=7&aqi=no&alerts=no`;
//       axios.get(url)
      
        
//         .then(result => {
         
//          console.log(result.data);
//           setNextDaysWeather({nextDaysData: result.data.forecast.forecastday[0].hour[0]});
          
//          })
//           .catch(function (error) {
//                     console.log(error);
//                 })
//         }
       
    
//   }, [locationContext.location]);

  return (
    <CurrentWeatherContext.Provider value={{currentWeather, setCurrentWeather, hourWeather, setHourWeather, tomorrowWeather, setTomorrowWeather, handleTomorrowWeather}}>
{props.children}
    </CurrentWeatherContext.Provider>
  )
}

export default CurrentWeatherContextProvider