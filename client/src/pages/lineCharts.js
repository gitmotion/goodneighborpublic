import React from 'react';
import Panel from '../components/panel.js';
import LineChartSimple from '../charts/simpleLineChart.js';
import LineChartVertical from '../components/charts/verticalLineChart.js';
import CustomDotLineChart from '../components/charts/customDotLineChart.js';
import DashedLineChart from '../components/charts/dashedLineChart.js';

const LineCharts = () => (
  <div className="row">
    <div className="col-md-6">
      <Panel title="Line Chart Simple">
        <LineChartSimple />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Line Chart Vertical">
        <LineChartVertical />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Custom Dot Line Chart">
        <CustomDotLineChart />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Dashed Line Chart">
        <DashedLineChart />
      </Panel>
    </div>
  </div>

);

export default LineCharts;
