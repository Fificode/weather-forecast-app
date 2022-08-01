import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';


export const LocationContext = createContext();

const LocationContextProvider = (props) => {
   
   const [location, setLocation] = useState("");
     const setCurrentLocation = (location) => {
    setLocation({ position: location })
  };


useEffect(() => {
    const url = 'https://ip-api.com/json';
    axios.get(url)
      .then(function (res) {

        const { city, country, lat, lon } = res.data;
        setLocation({ position: { city, country, lat, lon } })

      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  
  return (
    <LocationContext.Provider
      value={{ location, setCurrentLocation}}>
      {props.children}
    </LocationContext.Provider>
  )
}

export default LocationContextProvider