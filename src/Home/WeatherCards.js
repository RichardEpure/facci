import React from 'react';
import "../styles/css/weatherCards.css";
import { getWeather } from "../Api/weather";

class WeatherCards extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            temp: "",
            tempDesc: "",
            pressure: "",
            humidity: "",
        }
    }

    updateStats()
    {
        getWeather()
        .then(weather => {
            this.setState((state, props) => {
                return {
                    temp: weather.temp,
                    tempDesc: weather.description,
                    pressure: weather.pressure,
                    humidity: weather.humidity,
                };
            });
        })
        .catch(error => {
            console.trace(error);
        })
    }

    componentDidMount()
    {
        this.updateStats();
    }

    render() {
        return(
            <div className="weather-cards-container">
                <ul>
                    <li>
                        <i></i>
                        <p>{this.state.temp}°C</p>
                        <span>{this.state.tempDesc}</span>
                    </li>
                    <li>
                        <i></i>
                        <p>{this.state.humidity}%</p>
                        <span>Humidity</span>
                    </li>
                    <li>
                        <i></i>
                        <p>{this.state.pressure}Pa</p>
                        <span>Pressure</span>
                    </li>
                </ul>
            </div>
        );
    }

}

export default WeatherCards;