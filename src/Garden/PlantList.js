import React from "react";
import { plants, getPlants } from "../Api/plant";
import "../styles/css/plantlist.css";

class PlantList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            plants: plants
        }
    }

    async componentDidMount()
    {
        if(this.state.plants.length === 0)
        {
            this.setState({ plants: await getPlants() })
        }
    }

    componentDidUpdate()
    {
        console.log(this.state.plants);
    }
    
    render()
    {
        return(
            <div className="plant-list-container">
                <ul>
                    {
                    this.state.plants.map(plant => 
                    (
                        <li key={plant.id}>
                            <h2>{plant.name}</h2>
                        </li>
                    ))
                    }
                </ul>
            </div>
        );
    }
}

export default PlantList;