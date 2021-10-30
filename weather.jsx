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
        // q: `${city}`,
        q: 'Wilsonville',
        // lat: `${latitude}`,
        // lon: `${longitude}`,
        cnt: '4',
        units: 'imperial'
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '6d8b070cf8mshb79c3d891362f1cp18dca4jsn783f72151278'
      }
    };
      
      axios.request(options).then(function (response) {
        setWeather(response.data);
          // setTemp(`${Math.floor(response.data.list[0].feels_like.day)} ° F`)
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

    // slide js

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

function currentSlide(e) {
  // if (e ===) 
  // showSlide.current
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[e].style.display = "block"

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  dots[e].className += " active-dot";
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
                  <div className="weather-button" onClick={() => toggleScreen()}>back to today</div>
              <div className="forecast">
                <div className="forecast-lower-top"> 
                  <div className="forecast-nav"> 
                    <a className="dot" onClick={() => currentSlide(0)}>Tomorrow</a>
                    <a className="dot" onClick={() => currentSlide(1)}>2 Day</a>
                    <a className="dot" onClick={() => currentSlide(2)}>3 Day</a>
                  </div>
                </div>
                <div className="slides-container">
                  {/* slide 1 */}
                  <div className="slides fade" style={{"display": "block"}}>
                    <div className="slide-content" style={{"width":"100%"}}>
                      <div className="weather-temp">{`${Math.floor(weather.list[1].feels_like.day)} ° F`}</div>
                      <div className="weather-info">
                        <i className={`owf owf-${weather.list[1].weather[0].id}`}></i>
                        <div className="weather-text">{weather.list[1].weather[0].description}</div>
                        {/* Tomorrow */}
                      </div>
                    </div>
                  </div>
                  {/* slide 2 */}
                  <div className="slides fade">
                    <div className="slide-content" >
                      <div className="weather-temp">{`${Math.floor(weather.list[2].feels_like.day)} ° F`}</div>
                      <div className="weather-info">
                        <i className={`owf owf-${weather.list[2].weather[0].id}`}></i>
                        <div className="weather-text">{weather.list[2].weather[0].description}</div>
                        {/* Next Day */}
                      </div>
                    </div>
                  </div>
                  {/* slide 3 */}
                  <div className="slides fade" >
                    <div className="slide-content" >
                      <div className="weather-temp">{`${Math.floor(weather.list[3].feels_like.day)} ° F`}</div>
                      <div className="weather-info">
                        <i className={`owf owf-${weather.list[3].weather[0].id}`}></i>
                        <div className="weather-text">{weather.list[3].weather[0].description}</div>
                        {/* 3 days */}
                      </div>
                    </div>
                  </div>
                </div>
                 {/* Next and previous buttons  */}
                {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a> */}
              </div>
          </div>
               : 
            null
                }
      </div>
    );
    
}

export default Weather;