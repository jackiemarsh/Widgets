import React, { useEffect, useState } from 'react';

function Clock() {
    
    const [time, setTime] = useState(new Date())

    useEffect( () => {
        var timer = setInterval( () => tick(), 1000);

        return function cleanup() { 
            clearInterval(timer);
      }, []; 
    });
    
    function tick() {
        setTime(new Date());
    }

    return(
        <div>
            <h1>Clock Time</h1>
        </div>
    )
    
};

export default Clock;