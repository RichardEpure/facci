import React from 'react';

import Location from "./Location";
import Wind from "./Wind";
import Temperature from './Temperature';

class Home extends React.Component{
  componentDidMount(){
   
  }

  render(){
    return(
      <div className="Home">
        <Location></Location>
        <Wind></Wind>
        <Temperature></Temperature>
      </div>
    );
  }
}

export default Home;
