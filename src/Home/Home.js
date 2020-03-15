import React from 'react';

import Location from "./Location";
import Wind from "./Wind";
import Temperature from './Temperature';
import DayList from "./DayList";

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
        <DayList></DayList>
      </div>
    );
  }
}

export default Home;
