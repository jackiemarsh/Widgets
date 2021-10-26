import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {

    const [quote, setQuote] = useState(null)
    const [author, setAuthor] = useState(null)
    const [language, setLanguage] = useState("en")
    
    function getQuote(e) {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            params: {language_code: language},
            headers: {
              'x-rapidapi-host': 'quotes15.p.rapidapi.com',
              'x-rapidapi-key': '6d8b070cf8mshb79c3d891362f1cp18dca4jsn783f72151278'
            }
        };
      
        
      axios.request(options).then(function (response) {
          console.log(response.data);
          setQuote(response.data.content)
          setAuthor(`- ${response.data.originator.name}`)
          console.log(quote)
      }).catch(function (error) {
          console.error(error);
      });
    }

    // function changeLanguage(e) {
    //     setLanguage(e)
    // }
      
    return(
        <div className="quote-main">
            <h1>Random Quotes</h1>
            <button onClick={getQuote} className="quote-button">Click Here</button>
            <div className="quote-container">
                <div className="quote">{quote}</div>
                <div className="author">{author}</div>
            </div>
            <div className="dropdown">
            <div className="drop-title">Change Language?</div>
            <div className="dropdown-content">
                <p onClick={() => setLanguage('en')}>English</p>
                <p onClick={() => setLanguage('es')}>Spanish</p>
                <p onClick={() => setLanguage('pt')}>Portuguese</p>
                <p>Italian</p>
                <p>German</p>
                <p>French</p>
                <p>Russian</p>
                <p>Czech</p>
                <p>Slovak</p>
                <p>Polish</p>
                <p>Hungarian</p>
            </div>
            </div>
        </div>
    )
};

export default Quote; 