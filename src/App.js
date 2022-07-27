import React, { useState, useEffect } from 'react'
import Main from './components/Main';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Hourlychart from './components/Hourlychart';
import './styles/navbar.css';
import './styles/main.css';
import './styles/loading.css';
import './styles/hourlychart.css'



function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
   const [data, setData] = useState([]);
   const [hoursData, setHoursData] = useState([]);

     navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });


  //Weather conditions based on latitude and longitude
  useEffect(() => {
    const fetchData = async () => {
    
      const url = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat}&q=${long}&aqi=no`;
      await fetch(url)
      
        .then(res => res.json())
        .then(result => {
          setData(result)
         })
       
    }
    fetchData();
  }, [lat, long]);

  
  //Weather conditions based on latitude and longitude hourly
  useEffect(() => {
    const fetchHourlyData = async () => {
    
      const url = `${process.env.REACT_APP_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${lat}&q=${long}&q=hour&aqi=no&alerts=no`;
      await fetch(url)
      
        .then(res => res.json())
        .then(result => {console.log(url);
          setHoursData(result.forecast.forecastday[0].hour)
         })
       
    }
    fetchHourlyData();
  }, [lat, long]);

 
 
  return (
    <div>
     
             <Navbar setData={setData} />
      {(typeof data.location != 'undefined') ? (<Main weatherData={data} />) : (<Loading />)}
      <h2 className='weather__heading'>
        <a href='#today'>Today</a>
        <a href='#tomorrow'>Tomorrow</a>
        <a href='#nextsevendays'>Next 7 Days</a>
      </h2>
     <div className="weather__hourly-flex_container" id='today'>
        { (typeof data.location != 'undefined') && hoursData.map((hourData) => (<Hourlychart hourData={hourData} key={hourData.time_epoch} />)) }
    </div>
    </div>
  );
}

export default App;
