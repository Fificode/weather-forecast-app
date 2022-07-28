import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';


export const LocationContext = createContext();

const LocationContextProvider = (props) => {
   
   const [location, setLocation] = useState("");
     const setCurrentLocation = (location) => {
    setLocation({ position: location })
  };


useEffect(() => {
    const url = 'http://ip-api.com/json';
    axios.get(url)
      .then(function (res) {

        const { city, country, lat, lon } = res.data;
        setLocation({ position: { city, country, lat, lon } })

      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  //Weather conditions based on latitude and longitude
  // useEffect(() => {
  //   const fetchData = async () => {

  //   navigator.geolocation.getCurrentPosition(function (position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });
  //     const url = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat}&q=${long}&aqi=no`;
  //     await fetch(url)
      
  //       .then(res => res.json())
  //       .then(result => {
  //         setData(result)
  //        })
       
  //   }
  //   fetchData();
  // }, [ ]);

  return (
    <LocationContext.Provider
      value={{ location, setCurrentLocation}}>
      {props.children}
    </LocationContext.Provider>
  )
}

export default LocationContextProvider