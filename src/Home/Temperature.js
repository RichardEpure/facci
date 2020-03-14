import React from 'react';
import "../styles/css/temperature.css"
import { getWeather } from "../Api/weather";

class Temperature extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            temperature: "",
        }
    }

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

    componentDidMount()
    {
        this.updateTemperature();
    }

    render()
    {
        return(
            <div className="temperature-container">
                <h1><span>{this.state.temperature}</span>°C</h1>
            </div>
        );
    }

}

export default Temperature;