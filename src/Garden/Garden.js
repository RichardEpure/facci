import React from "react";
import PlantList from "./PlantList";
import "../styles/css/garden.css";

class Graden extends React.Component
{
    render()
    {
        return(
            <div className="garden-container">
                <h1>Plant Archive</h1>
                <PlantList></PlantList>
            </div>
        );
    }
}

export default Graden;