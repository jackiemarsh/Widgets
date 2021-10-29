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
    const [active, setActive] = useState(false)
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [city, setCity] = useState(null)

    // my api key: a41cd0fb11238b932ebc8c60d0c85b87
    const findLocation = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            setLatitude(pos.coords.latitude)
            setLongitude(pos.coords.longitude)

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
            <>
            <>Your location is: {city}</>
            {/* <>{findWeather()}</> */}
            </>
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
          // setTemp(`${Math.floor(response.data.list[0].feels_like.day)} ° F`)
        
          // setWeather(response.data.list[0].weather[0].description);
          setWeather(response.data);
          // setWeatherIcon(response.data.list[0].weather[0].id);
        console.log("weather", response.data)
      }).catch(function (error) {
          console.error(error);
      });
    }

    useEffect(() => findWeather(), [city])
    console.log("weather2", weather)
    console.log("active out", active)

    function toggleScreen() {
      setActive(active => !active);
      console.log("active?", active)
    }

    return(
        <div className="weather-main">
            <div className="location">{findLocation()}</div>
            {weather ? 
              active === false ?
            <div className="weather-lower"> 
              <div className="weather-lower-left"> 
                <div className="weather-lower-content">
                  <div className="weather-temp">{`${Math.floor(weather.list[0].feels_like.day)} ° F`}</div>
                  <div className="weather-info">
                      <i className={`owf owf-${weather.list[0].weather[0].id}`}></i>
                      <div className="weather-text">{weather.list[0].weather[0].description}</div>
                  </div>
                </div>
              </div> 
              <div className="weather-lower-right"> 
                  <div className="weather-button" onClick={() => toggleScreen()}>3-day forecast</div>
                <div className="weather-lower-content">
                  {/* include lower right in conditional, also forecast button that grabs info on click  */}
                </div>
              </div> 
            </div> 
            :  
            <div className="forecast-lower"> 
              <div className="forecast">
                  <div className="weather-button" onClick={() => toggleScreen()}>today</div>
                <div className="forecast-lower-top"> 
                  <div className="forecast-nav"> 
                    <a href="#slide-1">1</a>
                    <a href="#slide-2">2</a>
                    <a href="#slide-3">3</a>
                  </div>
                </div>

                <div className="slides">
                  <div id="slide-1">
                    {/* <div className="weather-temp">{`${Math.floor(weather.list[1].feels_like.day)} ° F`}</div>
                    <i className={`owf owf-${weather.list[1].weather[0].id}`}></i>
                    <div className="weather-text">{weather.list[1].weather[0].description}</div> */}
                    Tomorrow
                  </div>
                  <div id="slide-2">
                    Next Day
                  </div>
                  <div id="slide-3">
                    3 days
                  </div>
                </div>
              </div>
          </div>
               : 
            null
                }
      </div>
    );
    
}

export default Weather;