import React, { useState, useEffect } from 'react';

const toQueryString = (obj) => {
    const parts = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
        }
    }
    return parts.join('&');
}

function Weather(props) {

    const [weather, setWeather] = useState(null)
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    // my api key: a41cd0fb11238b932ebc8c60d0c85b87
    const findLocation = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            setLatitude(pos.coords.latitude)
            setLongitude(pos.coords.longitude)
            console.log(pos)
        });
    }
    useEffect(findLocation, [])
    // async function locValue() {
    //     findLocation().then(console.log(pos));
            
    //         // <>
    //         // <div>{pos.coords.latitude}</div>
    //         // <div>{pos.coords.longitude}</div>
    //         // </>
    //     // );
    // }

    const findWeather = (location) => {
        let url = 'http://api.openweathermap.org/data/2.5/weather?';
        const params = {
          lat: location.coords.latitude,
          lon: location.coords.longitude
        };

        url += toQueryString(params);
        const apiKey = 'a41cd0fb11238b932ebc8c60d0c85b87'
        url += `&APPID=${apiKey}`;

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
              const data = JSON.parse(xmlhttp.responseText);
              setWeather({data});
            }
        };
  
      xmlhttp.open('GET', url, true);
      xmlhttp.send();
    }

    let content = <div></div>;
    // const temp = (weather.main.temp - 273.15) * 1.8 + 32;
    return(
        <div>
            <h1>Weather</h1>
            {/* <div className='weather'>
              {content}
            </div> */}
            <div>Your location is: {latitude}, {longitude}</div>
      </div>
    );
}

export default Weather;