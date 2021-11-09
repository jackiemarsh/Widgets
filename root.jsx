import React from 'react';

import Clock from './clock';
import Tabs from './tabs'
import Weather from './weather';
import Quote from './quote';

function Root() {

  const tabInfo = [
    {title: "Clock Probably", content: <Clock />},
    {title: "Weather McTemp", content: <Weather /> },
    {title: "Get Inspired", content: <Quote />}
  ];
  
    return (
      <div className="main-cont">
        <h1 className="title">My Dashboard</h1>
        <Tabs tabInfo={tabInfo} />
      </div>
    );
  
}

export default Root;
