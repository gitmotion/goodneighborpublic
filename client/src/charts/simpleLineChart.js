/**
 * Filename: simpleLineChart.js
 * Simple line chanrt to show simple chart
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

class SimpleLineChart extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <LineChart width={600} height={300} data={this.props.lineChartData}
          margin={{top: 20, right: 20, left: 0, bottom: 10}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line type="monotone" dataKey="product1" stroke="#258df2"/>
          <Line type="monotone" dataKey="product2" stroke="#40c741" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

// Connect linechartdata as props to compenent
function mapStateToProps (state) {
  return {
    lineChartData: state.lineChartData
  }
}

export default connect(mapStateToProps)(SimpleLineChart);

