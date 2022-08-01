import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';


export const LocationContext = createContext();

const LocationContextProvider = (props) => {
   
   const [location, setLocation] = useState("");
     const setCurrentLocation = (location) => {
    setLocation({ position: location })
  };

const API_KEY = '9430594a2b8b49b5ad85bc870e5309a6';
useEffect(() => {
   
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`;
    axios.get(url)
      .then(function (res) {

        const { city, country_name, latitude, longitude } = res.data;
        setLocation({ position: { city, country_name, latitude, longitude } })

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