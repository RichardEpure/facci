import React from 'react';
import './styles/css/app.css';
import Calendar from './Calendar/Calendar'

// test imports
import Home from "./Home/Home";

class App extends React.Component{
  componentDidMount(){
   
  }

  render(){
    return(
      <div className="App">
        <Home></Home>
        {/* <Calendar></Calendar> */}
      </div>
    );
  }
}

export default App;
