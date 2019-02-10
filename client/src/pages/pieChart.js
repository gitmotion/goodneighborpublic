import React from 'react';
import Panel from '../components/panel.js';
import {SimplePieChart, StraightAnglePieChart} from '../components/charts/simplePieChart.js';
import {ThreeDimScatterChart, JointLineScatterChart} from '../components/charts/scatterChart.js';

const PieCharts = () => (
  <div className="row">
    <div className="col-sm-6">
      <Panel title="Simple Two Level Pie Chart">
        <SimplePieChart />
      </Panel>
    </div>
    <div className="col-sm-6">
      <Panel title="Straign Angle Pie Chart">
        <StraightAnglePieChart />
      </Panel>
    </div>
    <div className="col-sm-6">
      <Panel title="Scatter Chart">
        <ThreeDimScatterChart />
      </Panel>
    </div>
    <div className="col-sm-6">
      <Panel title="Joint Line Scatter Chart">
        <JointLineScatterChart />
      </Panel>
    </div>
  </div>
);

export default PieCharts;
