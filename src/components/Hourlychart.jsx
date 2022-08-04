import React from 'react'
import moment from 'moment';

const Hourlychart = ({hourData}) => {
  return (
    
     <div className='weather__hourly'>
<div className="weather__hourly-container">
    <div className="weather__hourly-image_container"><img src={hourData.condition.icon} alt="Weather condition icon" className='weather__hourly-image'/></div>
    <div className="weather__hourly-date">

<p>
            {moment(hourData.time).format("h:mm a")}
          </p>

</div>
<div className="weather__hourly-temperature">
<h2>{hourData.temp_c.toFixed()}<span>&deg;C</span></h2>

</div>

</div>
    </div>
  )
}

export default Hourlychart