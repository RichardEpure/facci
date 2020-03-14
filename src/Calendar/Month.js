import React, { Component } from 'react';
import Weekday from './Weekday';
import Day from './Day';

const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

class Month extends Component {
    constructor(props)
    {
        super(props);
        this.renderWeek = this.renderWeek.bind(this); 
        this.state = {
            month: ""
        }
    }

    updateMonth(x){
        var x = new Date();
        this.setState((state, props) => {
            return {
                month: x.getMonth()
            };
        });  
    }

    componentDidMount()
    {
        this.updateMonth();
    }


    render() { 
        const weekdaysMarkup = weekdays.map(weekday =>{
            return (
                <Weekday
                    key = {weekday}
                    title = {abbreviateWeekday(weekday)}
                    label = {weekday}
                />
            )
        });

        const weeks = getWeeksForMonth(2, 2020);
        console.log(weeks)

        const weeksMarkup = weeks.map((week, index) => {
            return(
                <div role="row" className="week" key={index}> 
                {week.map(this.renderWeek)}
                </div>
            )
        });

        return ( 
            <div> 
                <h1>{this.state.month}</h1>
                <div className="weekdayContainer"> {weekdaysMarkup}</div>
                {weeksMarkup}
             </div>
        );
    }

    renderWeek(fullDate, index){
        if (fullDate == null) {
            return <Day key={index} />
        }
        const date = fullDate.getDate();
        return (
            <Day
            key = {index}
            fullDate = {fullDate}
            />
        )
    }
}

function abbreviateWeekday(weekday){
    return weekday.substring(0,3)
}

const WEEK_LENGTH = 7;

function getWeeksForMonth(month,year){
    const firstOfMonth = new Date(year, month, 1);
    const firstDayofWeek = firstOfMonth.getDay() + 6;
    const weeks = [[]];

    console.log("first day of week " + firstOfMonth.getDay());

    let currentWeek = weeks[0]
    let currentDate = firstOfMonth;

    for (let i = 0; i < firstDayofWeek; i ++){
        currentWeek.push(null)
    }

    while (currentDate.getMonth() === month){
        if (currentWeek.length === WEEK_LENGTH){
            currentWeek = [];
            weeks.push(currentWeek);
        }

        currentWeek.push(currentDate);
        currentDate = new Date(year, month, currentDate.getDate() +1);
    }

    while (currentWeek.length < 7){
        currentWeek.push(null)
    }

    return weeks;
}

 
export default Month;