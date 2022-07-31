import React, {useContext} from 'react';
import { LocationContext } from '../context/LocationContextProvider';
import { CurrentWeatherContext } from '../context/CurrentWeatherContextProvider';
import Main from '../components/Main';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Hourlychart from '../components/Hourlychart';

const Appcontainer = () => {
     const locationContext = useContext(LocationContext);
     const { position } = locationContext.location;

  return (
    <CurrentWeatherContext.Consumer>
        {
            (context) => {
const currentWeather = context.currentWeather;
const hourWeather = context.hourWeather;
if(currentWeather && hourWeather){
    const dailyData = currentWeather.dailyData;
    const hourlyData = hourWeather.hourlyData;
    return(
        <div>
            {!position ? <Loading/> : <Navbar setDailyData={context.setCurrentWeather} setHourlyData={context.setHourWeather} position={position} setCurrentLocation={locationContext.setCurrentLocation}/>}
            <Main dailyData={dailyData} hourData={hourlyData}/>
             <h2 className='weather__heading'>
        <a href='#today'>Today's Hourly Weather conditions</a>
      </h2>
           <div className='weather__hourly-flex_container'> 
           {hourlyData.map((hourData) =>(<Hourlychart id='today' hourData={hourData} key={hourData.time_epoch}/>))}
           </div>
        </div>
    )
}
else{
    return <Loading />
}
            }
        }
    </CurrentWeatherContext.Consumer>
  )
}

export default Appcontainer