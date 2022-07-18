import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import apiKeys from './apiKeys';


window.addEventListener('load', () =>
{
  let long;
  let lat;
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
long = position.coords.longitude;
lat = position.coords.latitude;
const url = `${apiKeys.base}/current.json?key=${apiKeys.key}&q=${lat}&q=${long}&aqi=no`;
console.log(url);
fetch(url)
.then((response) => {
  return response.json();
  })
   .then((data) => {
    console.log(data);


   });


    });
    
  }

else {
  alert("Geolocation not available.")
}
//   .catch((err) => {
//     this.getWeather(28.67, 77.22);
//     alert("You have disabled location service.");
//   });

});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
