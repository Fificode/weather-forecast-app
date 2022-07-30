import React from 'react'
import moment from 'moment';

const Main = ({dailyData, hourData}) => {

return (
    <div className='weather__main'>
<div className="weather__main-container">
    <div className="weather__main-date">
<div><h1>Today</h1>
<p>
            {moment().format("h:mm a")}
          </p></div>
<p>{moment().format('dddd')} {moment().format('LL')}</p>
</div>
<div className="weather__main-temperature">
<h2>{dailyData.current.temp_c.toFixed(0)} <span>&deg;C</span> {hourData.temp_c.toFixed()}<span>&deg;C</span></h2>
<img src={dailyData.current.condition.icon}  alt="Weather condition icon" className='weather__main-image'/>
</div>
<div className="weather__main-location">
    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='weather__main-location-icon'><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>{dailyData.location.name}, {dailyData.location.country}</p>
</div>
</div>
    </div>
  )
}

export default Main