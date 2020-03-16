import React, { Component } from 'react';
import Calendar from 'react-calendar';
import "../styles/css/calendar.css"

class DatePicker extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default DatePicker;