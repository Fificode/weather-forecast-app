import React, {useEffect, useState} from 'react'


const Main = () => {

  return (
    <div className='weather__main'>
<div className="weather__main-container">
    <div className="weather__main-date">
<h1>Today</h1>
<p>Sat, 3 Aug</p>
</div>
<div className="weather__main-temperature">
<h2>30C</h2>
<img src="" alt="" />
</div>
<div className="weather__main-location">
    <p><span>{/* location icon */}</span>Alllentown, New Mexico 31134</p>
</div>
</div>
    </div>
  )
}

export default Main