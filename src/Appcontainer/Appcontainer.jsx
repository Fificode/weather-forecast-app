import React, { useContext} from 'react';
import { LocationContext } from '../context/LocationContextProvider';
import { CurrentWeatherContext } from '../context/CurrentWeatherContextProvider';
import Main from '../components/Main';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Hourlychart from '../components/Hourlychart';
import Tomorrowchart from '../components/Tomorrowchart';


const Appcontainer = () => {
 
  const locationContext = useContext(LocationContext);
  const { position } = locationContext.location;


  return (
    <CurrentWeatherContext.Consumer>
      {
        (context) => {
          const currentWeather = context.currentWeather;
          const hourWeather = context.hourWeather;
          const tomorrowWeather = context.tomorrowWeather;
          const handleTomorrowWeather = context.handleTomorrowWeather;
        

          if (currentWeather && hourWeather && tomorrowWeather) {
            const dailyData = currentWeather.dailyData;
            const hourlyData = hourWeather.hourlyData;
            const tomorrowsData = tomorrowWeather.tomorrowsData;
           
          
            return (
              <div>
                {!position ? <Loading /> : <Navbar setDailyData={context.setCurrentWeather} setHourlyData={context.setHourWeather} position={position} setCurrentLocation={locationContext.setCurrentLocation} />}
                <Main dailyData={dailyData} hourData={hourlyData} />
                <h2 className='weather__heading'>
                  <a href='#today'>Today</a>
                  <a href='#tomorrow' onClick={handleTomorrowWeather}>Tomorrow</a>
                 
                </h2>
                <div className='weather__flex-container'>
                <div className='weather__hourly-flex_container' id='today'>
                    {hourlyData.filter(hourData => hourData.time > dailyData.location.localtime).map((hourData) => (<Hourlychart hourData={hourData} key={hourData.time_epoch} />))}
                 </div>
                  <div className="weather__hourly-flex_container" id="tomorrow" >
                    {tomorrowsData.map((tomorrowData) => (<Tomorrowchart tomorrowData={tomorrowData} key={tomorrowData.time_epoch} />))}
                  </div>
                </div>
              </div>
            )
          }
          else {
            return <Loading />
          }
        }
      }
    </CurrentWeatherContext.Consumer>
  )
}

export default Appcontainer