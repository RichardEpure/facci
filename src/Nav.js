import React from "react";
import Home from "./Home/Home";
import "./styles/css/nav.css";
import { Home as HomeIcon, Calendar as CalendarIcon, Package as GardenIcon } from "react-feather";

const pages = {
    "home": <Home></Home>,
    "calendar": <span>calendar</span>,
    "garden": <span>garden</span>,
}
const iconSize = 30;
const icons = {
    "home": <HomeIcon size={iconSize}></HomeIcon>,
    "calendar": <CalendarIcon size={iconSize}></CalendarIcon>,
    "garden": <GardenIcon size={iconSize}></GardenIcon>
}

class Nav extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            selectPage: "home",
        }
    }

    displayPageSelection()
    {
        let elements = []
        let key = 0;
        for(let page in pages)
        {
            const onClickHandler = () => {
                this.setState(() => {
                    return {
                        selectPage: page
                    }
                });
            };

            elements.push(
                <li key={key} onClick={onClickHandler}>{icons[page]}</li>
            );
            key++;
        }
        return elements;
    }

    render() {
        return(
            <div>
                <div className="page-container">
                    {pages[this.state.selectPage]}
                </div>
                <div className="nav">
                    <ul>
                        {this.displayPageSelection()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;