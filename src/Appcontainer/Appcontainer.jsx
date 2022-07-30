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
if(currentWeather){
    const dailyData = currentWeather.dailyData;
    const hourlyData = hourWeather.hourlyData;
    return(
        <div>
            {!position ? <Loading/> : <Navbar setDailyData={context.setCurrentWeather} setHourlyData={context.setHourWeather} position={position} setCurrentLocation={locationContext.setCurrentLocation}/>}
            <Main dailyData={dailyData}/>
           <div className='weather__hourly-flex_container'> 
           {hourlyData.map((hourData) =>(<Hourlychart hourData={hourData} key={hourData.time_epoch}/>))}
           </div>
           {/* {  hoursData.filter(hourData =>  data.location.localtime < hourData.time ).map((hourData) => (<Hourlychart hourData={hourData}  />)) } */}
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