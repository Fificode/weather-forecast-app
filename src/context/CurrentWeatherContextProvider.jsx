import React, { createContext, useState, useEffect, useContext} from 'react'
import { LocationContext } from './LocationContextProvider';
import axios from 'axios';

export const CurrentWeatherContext = createContext();

const CurrentWeatherContextProvider = (props) => {

    const locationContext = useContext(LocationContext);
    const [currentWeather, setCurrentWeather] = useState(null);
    // const [selectedDayWeather, setSelectedDayWeather] = useState(null);

  
  useEffect(() => {
   
    const location = locationContext.location;
    if(location){
    let { lat, lon } = location.position;

      const url = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat}&q=${lon}&aqi=no&alerts=no`;
      axios.get(url)
      
        
        .then(result => {
          console.log(url);
          setCurrentWeather({dailyData: result})
         })
          .catch(function (error) {
                    console.log(error);
                })
        }
       
    
  }, [locationContext.location]);



  return (
    <CurrentWeatherContext.Provider value={{currentWeather, setCurrentWeather}}>
{props.children}
    </CurrentWeatherContext.Provider>
  )
}

export default CurrentWeatherContextProvider