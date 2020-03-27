import React, { Component } from 'react';

import Month from './Month';
import '../styles/css/calendar.css'

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]



const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

]



const today = new Date()

const daysInMonths = [
    31,
    new Date(today.getFullYear(), 2, 0).getDate(), //because feb is dynamic
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31

]

class Calendar extends Component {
    constructor(props){
        super(props)
        this.state = {
            monthNumber: today.getMonth(),
            monthName: monthNames[today.getMonth()],
            year: today.getFullYear(),
            date: today,
            maxDaysInMonth : this.getMaxDaysInMonth()
        }
    }

    //return days in a month
    getMaxDaysInMonth(){
        for (let i = 0; i < 12; i++){
            if (today.getMonth() === i){
                return daysInMonths[i]
            }
        }

    }

    //Changes to the previous Month
    goBack = () => {
        this.setState(state => ({
            monthNumber: state.monthNumber - 1,
            monthName: monthNames[state.monthNumber - 1],
            maxDaysInMonth : daysInMonths[state.monthNumber - 1]
        }));
    }

    //Changes to the next month
    goForward = () => {
        this.setState(state => ({
            monthNumber: state.monthNumber + 1,
            monthName: monthNames[state.monthNumber + 1],
            maxDaysInMonth : daysInMonths[state.monthNumber + 1]
        }));
    }



    render() {
        return (
            <div className="calendarContainer">
                <div className="monthHeader">
                    <span
                        className="prevMonth"
                        onClick={this.goBack}
                    >
                        &#8249;
                    </span>
                    <div className="month"> {this.state.monthName} </div>
                    <span
                        className="nextMonth"
                        onClick={this.goForward}
                    >
                        &#8250;
                    </span>
                </div>
                <Month
                    year ={this.state.year}
                    monthName = {this.state.monthName}
                    monthNumber={this.state.monthNumber}
                    maxDaysInMonth= {this.state.maxDaysInMonth}
                />
            </div>


        );
    }
}

export default Calendar;
