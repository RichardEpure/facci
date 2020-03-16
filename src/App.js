import React from 'react';
import './styles/css/app.css';
import DatePicker from './Calendar/DatePicker'

// test imports
import Home from "./Home/Home";

class App extends React.Component{
  componentDidMount(){
   
  }

  render(){
    return(
      <div className="App">
        <Home></Home>
        <DatePicker></DatePicker>
      </div>
    );
  }
}

export default App;
