import React from 'react';
import "../styles/css/daylist.css"
import DateHandler from "./DateHandler";
import HourList from "./HourList";

class DayList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectDay: DateHandler.date.getDay(),
        }
    }

    updateList()
    {
        let elements = []
        const dates = DateHandler.getDateList(DateHandler.numDays);

        for(let i=0; i<DateHandler.numDays; i++) {
            let button = <button>{dates[i].getDate()}</button>;
            if(i === this.state.selectDay)
            {
                button = <button className="select-day">{dates[i].getDate()}</button>
            }
            else
            {
                button = <button onClick={() => this.setState(() => { return{selectDay: i} })}>{dates[i].getDate()}</button>
            }

            elements.push(
                <li key={i}>
                    <h3>{DateHandler.days[dates[i].getDay()]}</h3>
                    {button}
                </li>
            );
        }

        return elements;
    }

    componentDidMount()
    {
        this.updateList();
    }

    render() {
        return(
            <div>
                <div className="daylist-container">
                    <ul>
                        {this.updateList()}
                    </ul>
                </div>
                <HourList key={this.state.selectDay} selectDay={this.state.selectDay}></HourList>
            </div>
        );
    }
}

export default DayList;