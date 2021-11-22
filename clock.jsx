import React, { useEffect, useState } from 'react';

function Clock() {
    
    const [timeText, setTimeText] = useState(new Date().toLocaleTimeString())
//    console.log(timeText)
    const [timeHex, setTimeHex] = useState()

    useEffect( () => {
        var timer = setInterval( () => tick(), 1000);

        return () => clearInterval(timer)
      }, []); 

    function tick() {
        let date = new Date()
        setTimeText(date.toLocaleTimeString())
        
        setTimeHex(`${date.getHours()}`+`${date.getMinutes()}`+`${date.getSeconds()}`)
    }

    return(
        <div className="clock-main">
            <h1 className="clock-title">Clock Time</h1>
            <div className="clock-nums">{timeText}</div>
            <div className="clock-nums">{timeHex}</div>
        </div>
    )
};

export default Clock;