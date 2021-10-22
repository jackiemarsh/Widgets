import React, { useEffect, useState } from 'react';

function Clock() {
    
    const [seconds, setSeconds] = useState(0)
    const [timeText, setTimeText] = useState(new Date().toLocaleTimeString())
   // console.log(timeText)

    useEffect( () => {
        var timer = setInterval( () => tick(), 1000);

        return () => clearInterval(timer)
      }, []); 

    // function reset() {
    //     setSeconds(0);
    //     // setIsActive(false);
    //   }

    function tick() {
        setTimeText(new Date().toLocaleTimeString())
    }

    return(
        <div>
            <h1>Clock Time</h1>
            <div>{timeText}</div>
        </div>
    )
};

export default Clock;