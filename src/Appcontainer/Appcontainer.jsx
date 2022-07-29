import React, {useContext} from 'react';
import { LocationContext } from '../context/LocationContextProvider';
import { CurrentWeatherContext } from '../context/CurrentWeatherContextProvider';
import Main from '../components/Main';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

const Appcontainer = () => {
     const locationContext = useContext(LocationContext);
     const { position } = locationContext.location;

  return (
    <CurrentWeatherContext.Consumer>
        {
            (context) => {
const currentWeather = context.currentWeather;
if(currentWeather){
    const dailyData = currentWeather.dailyData;
    return(
        <div>
            {!position ? <Loading/> : <Navbar setData={context.setCurrentWeather} position={position} setCurrentLocation={locationContext.setCurrentLocation}/>}
            <Main dailyData={dailyData}/>
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