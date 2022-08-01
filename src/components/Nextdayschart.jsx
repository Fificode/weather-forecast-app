import React from 'react';
import moment from 'moment';

const Nextdayschart = ({nextDayData}) => {
  return (
     <div className='weather__nextDay'>
<div className="weather__nextDay-container">
    <div className="weather__nextDay-image_container"><img src={nextDayData.condition.icon} alt="Weather condition icon" className='weather__nextDay-image'/></div>
    <div className="weather__nextDay-date">

<p>
            {moment(nextDayData.time).format("h:mm a")}
          </p>

</div>
<div className="weather__nextDay-temperature">
<h2>{nextDayData.temp_c.toFixed()}<span>&deg;C</span></h2>

</div>

</div>
    </div>
   
  )
}

export default Nextdayschart