import React from "react";
import PlantList from "./PlantList";

class Graden extends React.Component
{
    render()
    {
        return(
            <div className="garden-container">
                <PlantList></PlantList>
            </div>
        );
    }
}

export default Graden;