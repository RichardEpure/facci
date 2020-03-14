import React from 'react';

import Location from "./Location";
import Wind from "./Wind";

class Home extends React.Component{
  componentDidMount(){
   
  }

  render(){
    return(
      <div className="Home">
        <Location></Location>
        <Wind></Wind>
      </div>
    );
  }
}

export default Home;
