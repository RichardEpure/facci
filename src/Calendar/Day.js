import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Day extends Component {
    addNotes = () => {
    }

    render() {
        return (
              <td
                  style = {{cursor: "pointer"}}
                  key = {this.props.key}
                  onClick={this.addNotes}
                  label= {this.props.key}
                >
                    <div className="date">
                        <Link to={`/todos/${this.props.year}/${this.props.month}/${this.props.date}`} as="td">
                            {this.props.date}
                        </Link>
                    </div>
                  
              </td>
        );
    }
}

export default Day;
