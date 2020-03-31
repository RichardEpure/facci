import React from "react";
import { plants, getPlants, getPlant } from "../Api/plant";
import { ArrowRightCircle as Arrow } from "react-feather";
import "../styles/css/plantlist.css";

class PlantList extends React.Component
{
    _arrowSize = 30;

    constructor(props)
    {
        super(props);
        this.state = {
            plants: plants,
            elements: [],
            updateElements: false,
            selectPlant: { id: null }
        }
    }

    async componentDidMount()
    {
        if(this.state.plants.length === 0)
        {
            let plants = await getPlants();
            this.setState({ 
                plants: plants,
                updateElements: true
            });
        }
        else
        {
            this.setState({ 
                updateElements: true
            });
        }
    }

    componentDidUpdate()
    {
        if(this.state.updateElements)
        {
            this.updateElements();
        }
    }

    async expandItem(plant)
    {
        let plantData = await getPlant(plant.link);
    
        console.log({plant: plant, plantData: plantData});

        this.setState({
            updateElements: true,
            selectPlant: plant,
        });
    }

    updateElements()
    {
        let elements = this.state.plants.map(plant => {
                return(
                    <li key={plant.id}>
                        <h2>{plant.name}</h2>
                        <div className="arrow" onClick={() => this.expandItem(plant)}>
                            <Arrow size={this._arrowSize}></Arrow>
                        </div>
                    </li>
                );
            }
        );

        this.setState({ 
            elements: elements,
            updateElements: false
        });
    }
    
    render()
    {
        return(
            <div className="plant-list-container">
                <ul>
                    {this.state.updateElements ? null : this.state.elements}
                </ul>
            </div>
        );
    }
}

export default PlantList;