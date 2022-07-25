import React, { useState, useEffect } from 'react'
import Main from './components/Main';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import './styles/navbar.css';
import './styles/main.css';
import './styles/loading.css';



function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
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
        .then(result => {console.log(url);
          setData(result)
         })
       
    }
    fetchData();
  }, [lat, long]);

 
 
  return (
    <div>
     
             <Navbar setData={setData} />
      {(typeof data.location != 'undefined') ? (<Main weatherData={data} />) : (<Loading />)}
    </div>
  );
}

export default App;
