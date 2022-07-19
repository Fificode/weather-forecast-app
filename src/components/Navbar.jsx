import React from 'react'

const Navbar = () => {
   let searchInput = document.querySelector(".weather__navbar-searchfield");
  function handleSearch () {
   
    searchInput.classList.add('weather__navbar-searchfield_open'); 
searchInput.focus();

    document.querySelector(".weather__navbar-xicon").classList.add('weather__navbar-xicon_open');
    }

    function closeSearch (){
searchInput.classList.remove('weather__navbar-searchfield_open');
 document.querySelector(".weather__navbar-xicon").classList.remove('weather__navbar-xicon_open');
 searchInput.value = '';

    }
    function deleteSearch (){
      searchInput.value = '';
      searchInput.focus();
    }
  return (
    <div className='weather__navbar'>
        <h1>Weather Forecast</h1>
        <div className='weather__navbar-search_container'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='weather__navbar-searchicon'onClick={handleSearch}><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
          <input type="text" autoFocus placeholder='Search for location' className='weather__navbar-searchfield'/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='weather__navbar-xicon' onClick={closeSearch}><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='weather__navbar-deleteicon'onClick={deleteSearch}><path d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z"/></svg>
          </div>
    </div>
  )
}

export default Navbar