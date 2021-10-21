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

function Weather() {

    const [weather, setWeather] = useState(null)
    // useEffect(navigator.geolocation.getCurrentPosition(), [])
    // my api key: a41cd0fb11238b932ebc8c60d0c85b87
}

export default Weather;