import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LineChart, Line} from 'recharts';

class TinyLineChart extends Component {
  render() {
    return (
      <LineChart width={80} height={50} data={this.props.tinyChartData}>
        <Line type='monotone' dataKey='pv' stroke='#40c741' strokeWidth={2} />
      </LineChart>
    );
  }

};

function mapStateToProps (state) {
  return {
    tinyChartData: state.tinyChartData
  }
}

export default connect(mapStateToProps)(TinyLineChart);
