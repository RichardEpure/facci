import React from 'react';

import Location from "./Location";
import Wind from "./Wind";
import Temperature from './Temperature';
import WeatherCards from "./WeatherCards";

class Home extends React.Component{
  componentDidMount() {
   
  }

  render(){
    return(
      <div className="Home">
        <div className="simple-data-container">
          <Location></Location>
          <Wind></Wind>
          <Temperature></Temperature>
        </div>
        <WeatherCards></WeatherCards>
      </div>
    );
  }
}

export default Home;
