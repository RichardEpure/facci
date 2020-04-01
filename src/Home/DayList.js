import React from 'react';
import "../styles/css/daylist.css"
import DateHandler from "./DateHandler";
import HourList from "./HourList";
import { getForecast } from "../Api/weather";

class DayList extends React.Component {

    _isMounted = false;

    constructor(props)
    {
        super(props);
        this.state = {
            selectDay: DateHandler.date.getDay(),
            elements: []
        }
    }

    // Displays all days that can be forecasted and keeps track of which day the user has selected.
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

        if(this._isMounted)
        {
            this.setState(() => {
                return {
                    selectDay: selectDay,
                    elements: elements,
                }
            });
        }
    }

    // Fetches forecast details from API and uses detail to store how many days can be forecasted. Then call functions that require this data.
    componentDidMount()
    {
        this._isMounted = true;
        getForecast()
        .then(data => {
            DateHandler.numDays = data.length;
        })
        .then(() => {
            this.updateList(0);
        })
        .catch(error => console.trace(error))
    }

    componentWillUnmount()
    {
        this._isMounted = false;
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