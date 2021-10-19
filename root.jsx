import React from 'react';

import Clock from './clock';

class Root extends React.Component{
  constructor(props){
    super(props);
    //your code here
  }

  //your code here

  render(){
    return (
      <div>
        <h1>My Widgets Project</h1>
        <Clock />
      </div>
    );
  }
}

export default Root;
