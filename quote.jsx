import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {

    const [quote, setQuote] = useState(null)
    const [author, setAuthor] = useState(null)
    const [language, setLanguage] = useState("en")
    const [reveal, setReveal] = useState(false)
    
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
    };

    useEffect( () => {
        setQuote(quote)
    }, [language])

    function changeLanguage(e) {
        setLanguage(e)
        setReveal(false)
        // close menu
        // re-render useEffect?
        // shit what else did i want it to do? change what button says? maybe
    }
      
    return(
        <div className="quote-main">
            <div className="quote-top"> 
                <div className="quote-button">
                    <h1>Random Quotes</h1>
                    <button onClick={getQuote} >Click Here</button>
                </div>
                <div className="dropdown">
                    <div onMouseEnter={() => setReveal(true)} className="drop-title">{language}</div>
                    {reveal && (
                    <div className={`dropdown-content `}>
                        <p onClick={() => changeLanguage('en')}>English</p>
                        <p onClick={() => changeLanguage('es')}>Spanish</p>
                        <p onClick={() => changeLanguage('pt')}>Portuguese</p>
                        <p onClick={() => changeLanguage('it')}>Italian</p>
                        <p onClick={() => changeLanguage('de')}>German</p>
                        <p onClick={() => changeLanguage('fr')}>French</p>
                        <p onClick={() => changeLanguage('cs')}>Russian</p>
                        {/* <p>Czech</p> */}
                        <p onClick={() => changeLanguage('sk')}>Slovak</p>
                        {/* <p>Polish</p>
                        <p>Hungarian</p> */}
                    </div>
                    )}
                </div>
            </div>
            <div className="quote-container">   
                <div className="quote">{quote}</div>
                <div className="author">{author}</div>
            </div>
        </div>
    )
};

export default Quote; 