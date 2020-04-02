import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Day extends Component {
    addNotes = () => {
    }

    //allows the user to add notes to days
    render() {
        return (
                <td
                    style = {{cursor: "pointer"}}
                    key = {this.props.propKey}
                    onClick={this.addNotes}
                    label= {this.props.propKey}
                >
                    <div className={localStorage.getItem(`${this.props.date}/${this.props.month}/${this.props.year}`) ? "date-highlight" : "date"}>
                        <Link to={`/todos/${this.props.year}/${this.props.month}/${this.props.date}`} as="td"> 
                            {this.props.date}
                        </Link>
                    </div>
              </td>
        );
    }
}

export default Day;
