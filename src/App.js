import React, { useState, useEffect } from 'react'
import Main from './components/Main';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import './styles/navbar.css';
import './styles/main.css';
import './styles/loading.css';
import axios from 'axios';


function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
   const [query, setQuery] = useState("");
    const [error, setError] = useState("");
  const [data, setData] = useState([]);

  //Weather conditions based on latitude and longitude
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const url = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat}&q=${long}&aqi=no`;
      await fetch(url)
        .then(res => res.json())
        .then(result => {
          setData(result)
         });
    }
    fetchData();
  }, [lat, long]);

  //Weather conditions based on location
 const searchLocation = (city) => {
      const url = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city != "[object Object]" ? city : query}&aqi=no`;

      axios 
      .get(url)
      .then((response) => {
        setData(response.data);
        setQuery("");
      })
      .catch(function(error) {
        console.log(error);
        setData("");
        setQuery("");
        setError({message: "Not Found", query: query});
      });
    };

useEffect(() => {
  searchLocation("London");
}, []);

  return (
    <div>
      <Navbar handleLocation={searchLocation} />
      {(typeof data.location != 'undefined') ? (<Main weatherData={data} />) : (<Loading />)}
    </div>
  );
}

export default App;
