import React from 'react';
import "../styles/css/daylist.css"
import DateHandler from "./DateHandler";
import HourList from "./HourList";
import { getForecast } from "../Api/weather";

class DayList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectDay: DateHandler.date.getDay(),
            elements: []
        }
    }

    updateList(selectDay)
    {
        let elements = []
        const dates = DateHandler.getDateList(DateHandler.numDays);

        for(let i=0; i<DateHandler.numDays; i++) {
            let button = <button>{dates[i].getDate()}</button>;
            if(i === selectDay)
            {
                button = <button className="select-day">{dates[i].getDate()}</button>
            }
            else
            {
                button = <button onClick={() => this.updateList(i)}>{dates[i].getDate()}</button>
            }

            elements.push(
                <li key={i}>
                    <h3>{DateHandler.days[dates[i].getDay()]}</h3>
                    {button}
                </li>
            );
        }

        this.setState(() => {
            return {
                selectDay: selectDay,
                elements: elements,
            }
        });
    }

    componentDidMount()
    {
        getForecast()
        .then(data => {
            DateHandler.numDays = data.length;
        })
        .then(() => {
            this.updateList(0);
        })
        .catch(error => console.trace(error))
    }

    render() {
        return(
            <div>
                <div className="daylist-container">
                    <ul>
                        {this.state.elements}
                    </ul>
                </div>
                <HourList key={this.state.selectDay} selectDay={this.state.selectDay}></HourList>
            </div>
        );
    }
}

export default DayList;