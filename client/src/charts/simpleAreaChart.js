/**
 * Filename: home.js
 * SimpleAreaChart
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

class SimpleAreaChart extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <AreaChart height={300} data={this.props.areaChartData} margin={{top: 10, right: 20, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='earns' stroke='#258df2' fill='#258df2' />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

// Connect store data as props to componeent
function mapStateToProps (state) {
  return {
    areaChartData: state.areaChartData
  }
}

export default connect(mapStateToProps)(SimpleAreaChart);
