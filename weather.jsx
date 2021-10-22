import React, { useState, useEffect } from 'react';
import axios from "axios";

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
    const [weatherIcon, setWeatherIcon] = useState(null)
    const [temp, setTemp] = useState(null)
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    // my api key: a41cd0fb11238b932ebc8c60d0c85b87
    const findLocation = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            setLatitude(pos.coords.latitude)
            setLongitude(pos.coords.longitude)
            // console.log(pos)
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

    const findWeather = () => {
    //     const apiKey = 'a41cd0fb11238b932ebc8c60d0c85b87'
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
        params: {lat: latitude.toString(), lon: longitude.toString()},
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': '6d8b070cf8mshb79c3d891362f1cp18dca4jsn783f72151278'
        }
      };
      
      axios.request(options).then(function (response) {
          setTemp(Math.floor((response.data.list[0].main.temp - 273.15)* 1.8 + 32));
          setWeather(response.data.list[0].weather[0].description);
          setWeatherIcon(response.data.list[0].weather[0].id);
        console.log(response.data)
      }).catch(function (error) {
          console.error(error);
      });
//         fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?lat=${latitude}&lon=${longitude}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
// 		"x-rapidapi-key": "6d8b070cf8mshb79c3d891362f1cp18dca4jsn783f72151278"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
    }

    useEffect(() => findWeather(), [])
    // const temp = (weather.main.temp - 273.15) * 1.8 + 32;
    return(
        <div>
            <h1>Weather</h1>
            {/* <div className='weather'>
              {content}
            </div> */}
            <div>Your location is: {latitude}, {longitude}</div>
            <div>{temp}° F</div>
            <div>
                <div>{weather}</div>
                <i class={`owf owf-${weatherIcon}`}></i>
            </div>
      </div>
    );
    
}

export default Weather;