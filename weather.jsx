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
    const [forecast, setForecast] = useState(null)
    const [weatherIcon, setWeatherIcon] = useState(null)
    const [temp, setTemp] = useState(null)
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [city, setCity] = useState(null)

    // my api key: a41cd0fb11238b932ebc8c60d0c85b87
    const findLocation = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            setLatitude(pos.coords.latitude)
            setLongitude(pos.coords.longitude)
            // console.log(pos)

            const options = {
                method: 'GET',
                url: 'https://geocodeapi.p.rapidapi.com/GetNearestCities',
                params: {latitude: pos.coords.latitude.toString(), longitude: pos.coords.longitude.toString(), range: '0'},
                headers: {
                  'x-rapidapi-host': 'geocodeapi.p.rapidapi.com',
                  'x-rapidapi-key': '6d8b070cf8mshb79c3d891362f1cp18dca4jsn783f72151278'
                }
              };
              
              axios.request(options).then(function (response) {
                setCity(response.data[0].City)  
                console.log("city data", response.data);
              }).catch(function (error) {
                  console.error(error);
              });
        });
        if (!city) {
        return(
          <div className="loading">Locating you</div>
        )
      } else {
          return(
            <>Your location is: {city}</>
          )
        }
    };

    useEffect(findLocation, [])


    const findWeather = () => {
    //     const apiKey = 'a41cd0fb11238b932ebc8c60d0c85b87'
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
      params: {
        q: `${city}`,
        // q: 'Wilsonville',
        lat: `${latitude}`,
        lon: `${longitude}`,
        cnt: '4',
        units: 'imperial'
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '6d8b070cf8mshb79c3d891362f1cp18dca4jsn783f72151278'
      }
    };
      
      axios.request(options).then(function (response) {
        // if (response.data.list[0].deg < 100 && response.data.city.timezone == -36000) {
          setTemp(`${Math.floor(response.data.list[0].feels_like.day)} ° F`)
        // } else {
        //   setTemp(Math.floor((response.data.list[0].feels_like.day - 273.15)* 1.8 + 32))
        // };
          setWeather(response.data.list[0].weather[0].description);
          setWeatherIcon(response.data.list[0].weather[0].id);
        console.log("weather", response)
      }).catch(function (error) {
          console.error(error);
      });
    }

    useEffect(() => findWeather(), [city])
    
    // const findForecast = () => {
    //   //     const apiKey = 'a41cd0fb11238b932ebc8c60d0c85b87'
    //   const options = {
    //     method: 'GET',
    //     url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    //     params: {
    //       q: `${city}`,
    //       // q: 'Wilsonville',
    //       lat: `${latitude}`,
    //       lon: `${longitude}`,
    //       cnt: '4',
    //       units: 'imperial'
    //     },
    //     headers: {
    //       'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    //       'x-rapidapi-key': '6d8b070cf8mshb79c3d891362f1cp18dca4jsn783f72151278'
    //     }
    //   };
        
    //     axios.request(options).then(function (response) {
    //         setTemp(`${Math.floor(response.data.list[0].feels_like.day)} ° F`)

    //         setForecast(response.data);
            
    //       console.log("forecast", response.data.list[1].weather[0].description)
    //     }).catch(function (error) {
    //         console.error(error);
    //     });

    //     return(
    //     <div className="forecast">
    //       <div className="forecast-nav"> 
    //         <a href="#slide-1">1</a>
    //         <a href="#slide-2">2</a>
    //         <a href="#slide-3">3</a>
    //       </div>

    //       <div className="slides">
    //         <div id="slide-1">
    //           Tomorrow
    //         </div>
    //         <div id="slide-2">
    //           Next Day
    //         </div>
    //         <div id="slide-3">
    //           3 days
    //         </div>
    //       </div>
    //     </div>
    //     )
    // };

    return(
        <div className="weather-main">
            <div className="location">{findLocation()}</div>
            {weather ? 
            <div className="weather-lower"> 
              <div className="weather-lower-left"> 
                <div className="weather-lower-content">
                  <div>{temp}</div>
                  <div className="weather-info">
                      <i className={`owf owf-${weatherIcon}`}></i>
                      <div className="weather-text">{weather}</div>
                  </div>
                </div>
              </div> 
              <div className="weather-lower-right"> 
                <div className="weather-lower-content">
                  <div>3-day forecast</div>
                  {/* include lower right in conditional, also forecast button that grabs info on click  */}
                </div>
              </div> 
            </div> : null }
      </div>
    );
    
}

export default Weather;