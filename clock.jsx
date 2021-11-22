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
        (date.getMinutes() < 10) ? minutes = `0`+`${date.getMinutes()}` : minutes = date.getMinutes();
        (date.getSeconds() < 10) ? seconds = `0`+`${date.getSeconds()}` : seconds = date.getSeconds();
       
        let r = 255 - hours
        let r = 255 - hours
        let r = 255 - hours

        setTimeHex(`#`+`${hours}` +`${minutes}`+`${seconds}`)
    }

    return(
        <div className="clock-main" style={{background: timeHex}}>
            <h1 className="clock-title">Clock Time</h1>
            <div className="clock-nums">{timeText}</div>
            {/* <div className="clock-nums">{timeHex}</div> */}
        </div>
    )
};

export default Clock;