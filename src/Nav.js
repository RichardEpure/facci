import React from "react";
import Home from "./Home/Home";
import "./styles/css/nav.css";
import { Home as HomeIcon, Calendar as CalendarIcon, Package as GardenIcon } from "react-feather";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const ICON_SIZE = 30;

const routes = [
    {
        path: "/",
        icon: <HomeIcon size={ICON_SIZE}></HomeIcon>
    },
    {
        path: "/calendar",
        icon: <CalendarIcon size={ICON_SIZE}></CalendarIcon>
    },
    {
        path: "/garden",
        icon: <GardenIcon size={ICON_SIZE}></GardenIcon>
    }
]


class Nav extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/calendar" component={React.Fragment} />
                    <Route path="/garden" component={React.Fragment} />
                </Switch>
                <div className="nav">
                    <ul>
                        {routes.map(route => (
                        <li key={route.path}>
                            <Link to={route.path}>
                                {route.icon}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </BrowserRouter>
        );
    }
}

export default Nav;
