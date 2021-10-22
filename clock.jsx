import React, { useEffect, useState } from 'react';

function Clock() {
    
    const [timeText, setTimeText] = useState(new Date().toLocaleTimeString())
   // console.log(timeText)

    useEffect( () => {
        var timer = setInterval( () => tick(), 1000);

        return () => clearInterval(timer)
      }, []); 

    function tick() {
        setTimeText(new Date().toLocaleTimeString())
    }

    return(
        <div className="clock-main">
            <h1 className="clock-title">Clock Time</h1>
            <div className="clock-nums">{timeText}</div>
        </div>
    )
};

export default Clock;