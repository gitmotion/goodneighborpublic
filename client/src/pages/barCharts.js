import React from 'react';
import Panel from '../components/panel.js';
import SimpleBarChart from '../components/charts/simpleBarChart.js';
import StackedBarChart from '../components/charts/stackedBarChart.js';
import CustomShapeBarChart from '../components/charts/customShapeBarChart.js';
import BrushBarChart from '../components/charts/brashBarChart.js';

const BarCharts = () => (
  <div>
    <div className="row">
      <div className="col-sm-6">
        <Panel title="Simple Bar Chart">
          <SimpleBarChart />
        </Panel>
      </div>
      <div className="col-sm-6">
        <Panel title="Stacked Bar Chart">
          <StackedBarChart />
        </Panel>
      </div>
      <div className="col-sm-6">
        <Panel title="Custom Shape Bar Chart">
          <CustomShapeBarChart />
        </Panel>
      </div>
      <div className="col-sm-6">
        <Panel title="Brush Bar Chart">
          <BrushBarChart />
        </Panel>
      </div>
    </div>
  </div>

);

export default BarCharts;
