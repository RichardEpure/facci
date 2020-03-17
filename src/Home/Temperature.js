import React from 'react';
import "../styles/css/temperature.css"
import { getWeather } from "../Api/weather";

class Temperature extends React.Component
{
    _mounted = false;
    _days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    }
    _date = new Date();

    constructor(props)
    {
        super(props);
        this.state = {
            temperature: "",
            time: `${this._date.getHours()}:${(this._date.getMinutes()).toString().padStart(2,'0')}`,
        }
    }

    // Fetches current weather details from API and stores it in component state.
    updateTemperature()
    {
        getWeather()
        .then(weather => {
            this.setState((state, props) => {
                return {
                    temperature: weather.temp,
                };
            });
        })
        .catch(error => {
            console.trace(error);
        })
    }

    // Constantly updates the time every passing minute.
    updateTime()
    {
        const internalCallback = () => 
        {
            if(this._mounted)
            {
                this._date = new Date();
                this.setState(() => {
                    return {
                        time: `${this._date.getHours()}:${(this._date.getMinutes()).toString().padStart(2,'0')}`,
                    }
                })
                setTimeout(internalCallback, (60-this._date.getSeconds())*1000);
            }
        }
        internalCallback();
    }

    componentDidMount()
    {
        this._mounted = true;
        this.updateTemperature();
        this.updateTime();
    }

    componentWillUnmount()
    {
        this._mounted = false;
    }

    render()
    {
        return(
            <div className="temperature-container">
                <h1><span>{this.state.temperature}</span>°C</h1>
                <h2>{this._days[this._date.getDay()]}</h2>
                <h3>{this.state.time}</h3>
            </div>
        );
    }

}

export default Temperature;