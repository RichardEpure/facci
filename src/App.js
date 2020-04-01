import React from 'react';
import './styles/css/app.css';
import Nav from "./Nav";

class App extends React.Component{
	render() {
		return(
			<div className="App">
				<Nav></Nav>
			</div>
		);
	}
}

export default App;
