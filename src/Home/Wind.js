import React from 'react';
import "../styles/css/wind.css"
import { getWeather } from "../Api/weather";

class Wind extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            windSpeed: "",
        }
    }

    // Fetches current weather details from api and stores wind speed in component state.
    updateSpeed()
    {
        getWeather()
        .then(weather => {
            this.setState((state, props) => {
                return {
                    windSpeed: weather.windSpeed,
                };
            });
        })
        .catch(error => {
            console.trace(error);
        })
    }

    componentDidMount()
    {
        this.updateSpeed();
    }

    render()
    {
        return(
            <div className="wind-container">
                <h1>Wind</h1>
                <h2>{this.state.windSpeed}mph</h2>
            </div>
        );
    }

}

export default Wind;