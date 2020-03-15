import React from 'react';
import "../styles/css/hourlist.css";
import WeatherCards from "./WeatherCards";
import { getForecast } from "../Api/weather";

class HourList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectHour: "",
            hours: []
        }
    }

    componentDidMount()
    {
        getForecast()
        .then(data => {
            const selectDayData = data[this.props.selectDay];
            let hours = [];
            for(let i=0; i<selectDayData.length; i++) {
                hours.push(selectDayData[i].hours);
            }

            this.setState(() => {
                return {
                    selectHour: selectDayData[0].hours,
                    hours: hours,
                }
            });
        })
        .catch(error => console.trace(error))
    }

    displayHours()
    {
        let elements = [];
        let index;
        for(let i=0; i<this.state.hours.length; i++)
        {
            if(this.state.hours[i] === this.state.selectHour) {
                index = i;
            }
        }

        elements[0] = <li key={0}></li>
        elements[2] = <li key={2}></li>
        if(this.state.hours[index-1] !== undefined)
        {
            elements[0] = <li key={0} onClick={() => this.setState(() => { return{ selectHour: this.state.hours[index-1] } })}>{this.state.hours[index-1]}:00</li>
        }
        if(this.state.hours[index+1] !== undefined)
        {
            elements[2] = <li key={2} onClick={() => this.setState(() => { return{ selectHour: this.state.hours[index+1] } })}>{this.state.hours[index+1]}:00</li>
        }
        elements[1] = <li key={1} className="select-hour">{this.state.selectHour}:00</li>

        return elements;
    }

    render()
    {
        return(
            <div>
                <WeatherCards key={this.props.selectDay+this.state.selectHour} selectDay={this.props.selectDay} selectHour={this.state.selectHour}></WeatherCards>
                <div className="hourlist-container">
                    <ul>
                        {this.displayHours()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default HourList;