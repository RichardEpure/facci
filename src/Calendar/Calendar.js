import React, { Component } from 'react';
import Month from './Month'
import Week from './Week'
import '../styles/css/calendar.css'

class Calendar extends Component {
    componentDidMount()
    {

    }
    render() { 
        return (
            <div className="calendarContainer"> 
            <Month></Month>
            
            </div>

         );
    }
}
 
export default Calendar;