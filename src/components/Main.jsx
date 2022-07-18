import React from 'react'


const Main = ({weatherData}) => {

  return (
    <div className='weather__main'>
<div className="weather__main-container">
    <div className="weather__main-date">
<h1>Today</h1>
<p>Sat, 3 Aug</p>
</div>
<div className="weather__main-temperature">
<h2>{weatherData.current.temp_c}&deg;C</h2>
<img src="" alt="" />
</div>
<div className="weather__main-location">
    <p><span>{/* location icon */}</span>{weatherData.location.name}, {weatherData.location.country}</p>
</div>
</div>
    </div>
  )
}

export default Main