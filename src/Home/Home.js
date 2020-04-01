import React from 'react';

import Location from "./Location";
import Wind from "./Wind";
import Temperature from './Temperature';
import DayList from "./DayList";

// Functions as a container for all homepage related components.

class Home extends React.Component{
  render(){
    return(
      <div className="page-container Home">
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
