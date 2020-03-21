import React, { Component } from 'react';

import WeekDay from './WeekDay'
const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

]

var key = 0

class Month extends Component {


    constructor(props){
        function counter(){
            key++;
            return key;
        }
        super(props)
        this.state = {
            rows : this.getRows()
        }
        console.log(this.state.rows)
        // console.log(new Date(this.props.year, this.props.monthNumber, 1).getDay())
    }

    getRows = () => {
        const rows = []
        const startDayIndex =  new Date(this.props.year, this.props.monthNumber, 1).getDay()
        const numberOfRows = (startDayIndex < 5) ? 5 : 6
        let date = 1
        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            const days = []
            const lastDayIndex = new Date(this.props.year, this.props.monthNumber, this.props.maxDaysInMonth).getDay()

            for (let dayIndex = 0; dayIndex < 7; dayIndex++) {

                if (rowIndex === 0 && dayIndex < startDayIndex) {
                    days.push({
                        date: null,
                        name: null
                    })
                } else if (rowIndex === 5 && dayIndex > lastDayIndex) {
                    days.push({
                        date: null,
                        name: null
                    })
                } else if (date > this.props.maxDaysInMonth + startDayIndex) {
                    days.push({
                        date: null,
                        name: null
                    })
                } else {
                    days.push({
                        date: date - startDayIndex,
                        name: weekDays[dayIndex]
                    })
                }
                date++
            }
            rows.push(days)
        }
        return rows
    }

    //Shows the day view when clicking a day
    addNotes = () => {

        console.log("I was clicked!")
        // alert("clicked")


        // this.setState(state => ({
        //     monthNumber: this.state.monthNumber + 1,
        //     monthName: this.getMonthName(),
        //     maxDaysInMonth : this.getMaxDaysInMonth()
        // }));

        // console.log("changed monthNumber " + this.state.monthNumber)
    }



    render() {
        console.log(this.props)
        return (
            <div className="weekDayContainer">

                <table className = "weekDayHeader">
                    <thead>
                        <tr>
                          {weekDays.map(weekDay => (
                            <td
                                key={weekDay}
                                label={weekDay}>
                                    {weekDay}&nbsp;&nbsp;&nbsp;
                            </td>
                          ))}
                        </tr>
                    </thead>
                    <tbody>
                    {this.getRows().map((days, rowIndex) => (
                      <tr key={rowIndex}>
                          {days.map(day => ( // TODO: come up with a key for the component
                            <td
                                style = {{cursor: "pointer"}}
                                key = {key++}
                                onClick={this.addNotes}
                                label= {key}>
                                    {day.date}
                            </td>
                          ))}
                      </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Month;
