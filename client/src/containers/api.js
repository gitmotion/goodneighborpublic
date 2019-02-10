import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/apiAction';


class Api extends Component {

  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {

    return (
      <header className="api">
        <div className="header-right">
          <h1></h1>

        </div>
      </header>
    );
  }
}



export default connect((state) => state, { fetchWeather })(Api);
