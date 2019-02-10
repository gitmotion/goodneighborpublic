import React, {Component}from 'react';
import {connect} from 'react-redux';
import {BarChart, Bar} from 'recharts';

class TinyBarChart extends Component {
  render() {
    return (
      <BarChart width={80} height={50} data={this.props.tinyChartData}>
        <Bar dataKey='uv' fill='#40c741'/>
      </BarChart>
    );
  }
};

function mapStateToProps (state) {
  return {
    tinyChartData: state.tinyChartData
  }
}

export default connect(mapStateToProps)(TinyBarChart);
