import React from "react";
import { getPlants } from "../Api/plant";

class PlantList extends React.Component
{
    componentDidMount()
    {
        getPlants();
    }

    render()
    {
        return(
            <span>plant list</span>
        );
    }
}

export default PlantList;