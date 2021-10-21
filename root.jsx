import React from 'react';

import Clock from './clock';
import Tabs from './tabs'
import Weather from './weather';

function Root() {

  const tabInfo = [
    {title: "tab 1", content: "something"},
    {title: "tab 2", content: "other crap"},
    {title: "tab 3", content: "last shit"}
  ];
  
    return (
      <div className="main-cont">
        <h1 className="title">My Widgets Project</h1>
        {/* <Clock /> */}
        <Tabs tabInfo={tabInfo}/>
        <Weather />
      </div>
    );
  
}

export default Root;
