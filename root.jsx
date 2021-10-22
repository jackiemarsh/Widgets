import React from 'react';

import Clock from './clock';
import Tabs from './tabs'
import Weather from './weather';
import Quote from './quote';

function Root() {

  const tabInfo = [
    {title: "Clock Probably", content: <Clock />},
    {title: "Weather Crap", content: <Weather /> },
    {title: "look it's a tab", content: <Quote />}
  ];
  
    return (
      <div className="main-cont">
        <h1 className="title">My Widgets Project</h1>
        <Tabs tabInfo={tabInfo} />
        {/* <Weather /> */}
        
      </div>
    );
  
}

export default Root;
