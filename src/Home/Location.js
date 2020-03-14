import React from 'react';
import "../styles/css/location.css"
import { getLocation } from "../Api/geo";

class Location extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            city: "",
            country: "",
        }
    }

    updateLocation()
    {
        getLocation()
        .then(location => {
            this.setState((state, props) => {
                return {
                    city: location.city,
                    country: location.country,
                };
              });
        })
        .catch(error => {
            console.trace(error);
        })
    }

    componentDidMount()
    {
        this.updateLocation();
    }

    render()
    {
        return(
            <div className="location-container">
                <h1>{this.state.city}</h1>
                <h2>{this.state.country}</h2>
            </div>
        );
    }

}

export default Location;