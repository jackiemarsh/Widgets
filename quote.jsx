import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {

    const [quote, setQuote] = useState(null)
    const [author, setAuthor] = useState(null)
    
    function getQuote(e) {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            params: {language_code: 'en'},
            headers: {
              'x-rapidapi-host': 'quotes15.p.rapidapi.com',
              'x-rapidapi-key': '6d8b070cf8mshb79c3d891362f1cp18dca4jsn783f72151278'
            }
        };
      
        
      axios.request(options).then(function (response) {
          console.log(response.data);
          setQuote(response.data.content)
          setAuthor(response.data.originator.name)
          console.log(quote)
      }).catch(function (error) {
          console.error(error);
      });
    }
      
    return(
        <div>
            <h1>Random Quotes</h1>
            <button onClick={getQuote}>Click Here</button>
            <div>{quote}</div>
            <div>- {author}</div>
        </div>
    )
};

export default Quote; 