import React, { Component } from 'react';
import Week from './Week'

class Month extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            month: "",
            monthNumber: "",
            numberOfDays: ""
        }
    }

    updateMonthData(){
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "Novemeber",
            "December"
        ]
        
        const today = new Date()
        // console.log(monthNames[today.getMonth()]);
        
        this.setState((state, props) => {
            return {
                month: monthNames[today.getMonth()],
                monthNumber: today.getMonth()
            };
        });
    }

    updateNumberOfDays(){
        const daysInMonth = [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ]
        
        const today = new Date()
        // console.log(daysInMonth[today.getMonth()]);
        
        this.setState((state, props) => {
            return {
                numberOfDays: daysInMonth[today.getMonth()]
            };
        });
    }

    componentDidMount()
    {
        this.updateMonthData();
        this.updateNumberOfDays();
    }

    
    render(){

        return ( 
            <div className="monthNameContainer">
                <h1 className="monthName"> {this.state.month}</h1>
                {/* <h1 > {this.state.days} </h1> */}
                <Week numberOfDays = {this.state.numberOfDays} 
                month = {this.state.month}
                monthNumber = {this.state.monthNumber}/>
            </div>
         );
    }
}
 
export default Month;