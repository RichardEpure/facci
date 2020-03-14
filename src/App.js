import React from 'react';
import './styles/css/app.css';

// test imports
import Home from "./Home/Home";

class App extends React.Component{
  componentDidMount(){
   
  }

  render(){
    return(
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
