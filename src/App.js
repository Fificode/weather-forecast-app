import React from 'react'
import Appcontainer from './Appcontainer/Appcontainer';
import CurrentWeatherContextProvider from './context/CurrentWeatherContextProvider';
import LocationContextProvider from './context/LocationContextProvider';
import './styles/navbar.css';
import './styles/main.css';
import './styles/loading.css';
import './styles/hourlychart.css';
import './styles/tomorrowchart.css';




function App() {
 
 
  return (
    <div>
     
     <LocationContextProvider>
          <CurrentWeatherContextProvider>
            <Appcontainer />
          </CurrentWeatherContextProvider>
        </LocationContextProvider>
   
    </div>
  );
}

export default App;
