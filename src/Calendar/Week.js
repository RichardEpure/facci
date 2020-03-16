import React, { Component } from 'react';
// import { number } from 'prop-types';
// import { start } from 'repl';

class Week extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            numberOfWeeks: "",
            startDay: "",
            days: [],
            dayNames: []
        }
    }

    updateStartDay(){
        const today = new Date()
        const month = today.getMonth()
        const year = today.getFullYear()
        const startOfMonth = new Date(year, month, 1)
        const lastOfMonth = new Date(year, month, 30)
        const monthStartedOn = startOfMonth.getDay()

        const days = [
            "Sunday",
            "Monday",  
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday" 
        ]
    
        this.setState((state, props) => {
            return {
                startDay: days[startOfMonth.getDay()],
                days: days
            };
        });

        this.updateNumberOfWeeks(days[startOfMonth.getDay()], lastOfMonth)
        
    }


    updateNumberOfWeeks(startDay, lastOfMonth){
        const dayNames = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ]

        console.log(startDay)
        console.log(lastOfMonth.getDate())

        var dayIndex = 0
        for (let i = 0; i<=6; i++){
            if (dayNames[i] == startDay){
                console.log("LOOP STOPPED AT " + dayNames[i] + " WHICH IS AT INDEX " + i);
                dayIndex = i;
            }
        }
    
        var numOfWeeks = 1;

        for (let i = 1; i <= lastOfMonth.getDate(); i++){
            console.log("day " + i + " is " + startDay)
            if (startDay == dayNames[6]){
                startDay = dayNames[0]
                numOfWeeks += 1
            }
            else{
                startDay = dayNames[dayIndex + 1]
            }
            dayIndex += 1;
            if (dayIndex > 6){
                dayIndex = 0
            }
        }

        // console.log(numberOfWeeks)
        
        this.setState((state, props) => {
            return {
                numberOfWeeks: numOfWeeks,
                dayNames: dayNames
            };
        });
        
    }

    printWeek(){

        var weeks = 6;
        var rows = [];

        for (let i = 0; i < weeks; i++){
            rows[i] = <li> {weeks}</li>
        }


        

        return rows;
    }

    componentDidMount()
    {
        this.updateStartDay();
        // this.updateNumberOfWeeks();
        
    }


    render() { 
        // console.log(this.state.dayNames)
        
        return (  
            <div> 
                <div className="dayHeadings"> 
                    <h3 className="day">
                        {this.state.dayNames[0]} 
                    </h3>
                    <h3 className="day">
                        {this.state.dayNames[1]} 
                    </h3>
                    <h3 className="day">
                        {this.state.dayNames[2]} 
                    </h3>
                    <h3 className="day">
                        {this.state.dayNames[3]} 
                    </h3>
                    <h3 className="day">
                        {this.state.dayNames[4]} 
                    </h3>
                    <h3 className="day">
                        {this.state.dayNames[5]} 
                    </h3>
                    <h3 className="day">
                        {this.state.dayNames[6]} 
                    </h3>
                </div>
                <div className="weeks">
                    {this.printWeek()}
                </div>
            </div> );
    }
}
 
export default Week;