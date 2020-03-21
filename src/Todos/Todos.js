import React, { Component } from 'react';

export default class Todos extends Component {
  constructor(props) {
      super(props);
      const { match: { params: { date, month, year } } } = props;
      this.state = {
          notes: window.localStorage.getItem(`${date}/${month}/${year}`) || ''
      }
  }

      render() {
          const { match: { params: { date, month, year } } } = this.props;
          return(
              <div>
                  <textarea
                      onChange={
                          event => {
                              this.setState({ notes: event.target.value })
                              localStorage.setItem(`${date}/${month}/${year}`, event.target.value)
                          }
                      }
                      value={this.state.notes}
                  />
              </div>
          )
      }
}
