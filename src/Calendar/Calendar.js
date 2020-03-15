import React, { Component } from 'react';
import Month from './Month';
import "./css/calendar.css"

class Calendar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="calendarContainer">
                <Month></Month>
            </div>
        );
    }
}
 
export default Calendar;