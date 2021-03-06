import React from 'react';
import "../styles/css/hourlist.css";
import WeatherCards from "./WeatherCards";
import { getForecast } from "../Api/weather";
import { ChevronRight as RightIcon, ChevronLeft as LeftIcon } from "react-feather";

const iconSize = 19;

class HourList extends React.Component {
    _isMounted = false;

    constructor(props)
    {
        super(props);
        this.state = {
            selectHour: "",
            hours: []
        }
    }

    // Fetches forecast details from API and stores it in component state.
    componentDidMount()
    {
        this._isMounted = true;

        getForecast()
        .then(data => {
            const selectDayData = data[this.props.selectDay];
            let hours = [];
            for(let i=0; i<selectDayData.length; i++) {
                hours.push(selectDayData[i].hours);
            }

            if(this._isMounted)
            {
                this.setState(() => {
                    return {
                        selectHour: selectDayData[0].hours,
                        hours: hours,
                    }
                });
            }
        })
        .catch(error => console.trace(error))
    }

    componentWillUnmount()
    {
        this._isMounted = false;
    }

    // Displays user selected hour to show forecast details for. Also displays adjacent hours that are in 3 hour intervals that the user can traverse.
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
                        <i><LeftIcon size={iconSize}></LeftIcon></i>
                        {this.displayHours()}
                        <i><RightIcon size={iconSize}></RightIcon></i>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HourList;