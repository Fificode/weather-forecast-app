import React, { useState, useEffect } from 'react'
import Main from './components/Main';
import Navbar from './components/Navbar';
import './styles/navbar.css';
import './styles/main.css';
import './styles/loading.css';



function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
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



  return (
    <div>
      <Navbar />
      {(typeof data.location != 'undefined') ? (<Main weatherData={data} />) : (<div></div>)}
    </div>
  );
}

export default App;
