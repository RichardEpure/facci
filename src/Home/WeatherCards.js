import React from 'react';
import "../styles/css/weatherCards.css";
import { getForecast } from "../Api/weather";
import { BarChart as PressureIcon, CloudDrizzle as HumidityIcon, Thermometer as TempIcon } from "react-feather";

const iconSize = 25;

class WeatherCards extends React.Component {

    _isMounted = false;

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
            if(this._isMounted)
            {
                this.setState(() => {
                    return {
                        temp: selectHourData.temp,
                        tempDesc: selectHourData.description,
                        pressure: selectHourData.pressure,
                        humidity: selectHourData.humidity,
                    }
                });
            }   
        })
        .catch(error => console.trace(error))
    }

    componentDidMount()
    {
        this._isMounted = true;
        this.updateStats();
    }

    componentWillUnmount()
    {
        this._isMounted = false;
    }

    render() {
        return(
            <div className="weather-details-container">
                <div className="weather-cards-container">
                    <ul>
                        <li>
                            <i><TempIcon size={iconSize}></TempIcon></i>
                            <p>{this.state.temp}°C</p>
                            <span>{this.state.tempDesc}</span>
                        </li>
                        <li>
                            <i><HumidityIcon size={iconSize}></HumidityIcon></i>
                            <p>{this.state.humidity}%</p>
                            <span>Humidity</span>
                        </li>
                        <li>
                            <i><PressureIcon size={iconSize}></PressureIcon></i>
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