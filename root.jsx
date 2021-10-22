import React from 'react';

import Clock from './clock';
import Tabs from './tabs'
import Weather from './weather';

function Root() {

  const tabInfo = [
    {title: "Clock Probably", content: "something"},
    {title: "Weather Crap", content: <Weather /> //"other crap"
  },
    {title: "look it's a tab", content: "other shit"}
  ];
  
    return (
      <div className="main-cont">
        <h1 className="title">My Widgets Project</h1>
        {/* <Clock /> */}
        <Tabs tabInfo={tabInfo}/>
        {/* <Weather /> */}
      </div>
    );
  
}

export default Root;
