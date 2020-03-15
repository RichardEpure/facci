import React from 'react';
import "../styles/css/weatherCards.css";
import { getWeather, getForecast } from "../Api/weather";

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
        getForecast()
        .then(data => {
            const selectDayData = data[this.props.selectDay];
            let index = 0;
            for(let i=0; i<selectDayData.length; i++)
            {
                if(selectDayData[i].hours === this.props.selectHour)
                {
                    index = i;
                    break;
                }
            }
            const selectHourData = selectDayData[index];
            this.setState(() => {
                return {
                    temp: selectHourData.temp,
                    tempDesc: selectHourData.description,
                    pressure: selectHourData.pressure,
                    humidity: selectHourData.humidity,
                }
            });
        })
        .catch(error => console.trace(error))
    }

    componentDidMount()
    {
        this.updateStats();
    }

    render() {
        return(
            <div className="weather-details-container">
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
            </div>
        );
    }

}

export default WeatherCards;