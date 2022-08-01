import React from 'react';
import moment from 'moment';

const Tomorrowchart = ({tomorrowData}) => {
  return (
   
        <div className='weather__tomorrow'>
<div className="weather__tomorrow-container">
    <div className="weather__tomorrow-image_container"><img src={tomorrowData.condition.icon} alt="Weather condition icon" className='weather__tomorrow-image'/></div>
    <div className="weather__tomorrow-date">

<p>
            {moment(tomorrowData.time).format("h:mm a")}
          </p>

</div>
<div className="weather__tomorrow-temperature">
<h2>{tomorrowData.temp_c.toFixed()}<span>&deg;C</span></h2>

</div>

</div>
    </div>
   
  )
}

export default Tomorrowchart