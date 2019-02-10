import React, {Component}from 'react';
import {connect} from 'react-redux';
import {AreaChart, Area} from 'recharts';

class TinyAreaChart extends Component {
  render() {
    return (
      <AreaChart width={80} height={50} data={this.props.tinyChartData}
        margin={{top: 5, right: 0, left: 0, bottom: 5}}>
        <Area type='monotone' dataKey='uv' stroke='#258df2' fill='#258df2' />
      </AreaChart>
    );
  }
};

function mapStateToProps (state) {
  return {
    tinyChartData: state.tinyChartData
  }
}

export default connect(mapStateToProps)(TinyAreaChart);
