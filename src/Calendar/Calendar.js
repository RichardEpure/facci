import React, { Component } from 'react';

import Month from './Month';
import './calendar.css'

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
    new Date(today.getFullYear, 2, 0).getDate(), //feb
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

// const maxDaysInMonth = getMaxDaysInMonth();



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

    //returns the name of the month, calculated from the number format given by JS 'Date' object
    getMonthName(){
        for (let i = 0; i < monthNames.length; i++){
            if (this.state.monthNumber === i){
                this.setState((state, props) => {
                    return {
                        monthName: monthNames[i]
                    };
                });
            }
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

    //Shows the previous Month
    goBack = () => {
        console.log("I was called when the month set was "  + this.state.monthName)

        this.setState(state => ({
            monthNumber: state.monthNumber - 1,
            monthName: monthNames[state.monthNumber - 1],
            maxDaysInMonth : daysInMonths[state.monthNumber - 1]
        }));

        // console.log("changed monthNumber " + this.state.monthNumber)
    }

    //Shows the next month
    goForward = () => {

        console.log("I was called when the month set was "  + this.state.monthName)

        this.setState(state => ({
            monthNumber: state.monthNumber + 1,
            monthName: monthNames[state.monthNumber + 1],
            maxDaysInMonth : daysInMonths[state.monthNumber + 1]
        }));

        // console.log("changed monthNumber " + this.state.monthNumber)
    }



    render() {
        // console.log("Current MonthNumber is " + this.state.monthNumber)
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
