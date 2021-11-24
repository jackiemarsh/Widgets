import React, { useEffect, useState } from 'react';

function Clock() {
    
    const [timeText, setTimeText] = useState(new Date().toLocaleTimeString())
//    console.log(timeText)
    const [timeHex, setTimeHex] = useState()
    const [contHex, setContHex] = useState()

    useEffect( () => {
        var timer = setInterval( () => tick(), 1000);

        return () => clearInterval(timer)
      }, []); 

    function tick() {
        let date = new Date()
        setTimeText(date.toLocaleTimeString())
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        (date.getHours() < 10) ? hours = `0`+`${date.getHours()}` : hours = date.getHours();
        (date.getMinutes() < 10) ? minutes = `0`+`${(date.getMinutes())}` : minutes = (date.getMinutes());
        (date.getSeconds() < 10) ? seconds = `0`+`${date.getSeconds()}` : seconds = date.getSeconds();
       
        let r = (255 - parseInt(hours, 16)).toString(16)
        let g = (255 - parseInt(minutes, 16)).toString(16)
        let b = (255 - parseInt(seconds, 16)).toString(16)

        setTimeHex(`#`+`${hours.toString(16)}` +`${minutes.toString(16)}`+`${seconds.toString(16)}`)
        setContHex(`#`+`${r}` +`${g}`+`${b}`)
        console.log(hours, hours.toString(16))
    }

    function convert(num) {

    }

    return(
        <div className="clock-main" style={{background: timeHex}}>
            <h1 className="clock-title" style={{color: contHex}}>Clock Time</h1>
            <div className="clock-nums" style={{color: contHex, border: `3px solid ${contHex}`, borderRadius: "5px"}}>{timeText}</div>
            {/* <div className="clock-nums">{timeHex}</div> */}
            {/* <div className="clock-nums">{contHex}</div> */}
        </div>
    )
};

export default Clock;