import React from "react";
import { plants, getPlants } from "../Api/plant";
import { ArrowRightCircle as Arrow } from "react-feather";
import "../styles/css/plantlist.css";

class PlantList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            plants: plants,
            elements: []
        }
    }

    async componentDidMount()
    {
        if(this.state.plants.length === 0)
        {
            let plants = await getPlants();
            this.setState({ 
                plants: plants,
                elements: plants.map(plant => (
                    <li key={plant.id}>
                        <h2>{plant.name}</h2>
                        <div className="arrow">
                            <Arrow size={30}></Arrow>
                        </div>
                    </li>
                ))
            })
        }
    }
    
    render()
    {
        return(
            <div className="plant-list-container">
                <ul>
                    {this.state.elements.map(element => element)}
                </ul>
            </div>
        );
    }
}

export default PlantList;