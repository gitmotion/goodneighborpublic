import React from 'react';
import Panel from '../components/panel.js';
import SimpleAreaChart from '../charts/simpleAreaChart.js';
import StackedAreaChart from '../components/charts/stackAreaChart.js';
import CardinalAreaChart from '../components/charts/cardinalAreaChart.js';
import PercentAreaChart from '../components/charts/percentAreaChart.js';
import LineBarAreaComposedChart from '../components/charts/composedChart.js';

const AreaCharts = () => (
  <div className="row">
    <div className="col-sm-6">
      <Panel title="Simple Area Chart">
        <SimpleAreaChart />
      </Panel>
    </div>
    <div className="col-sm-6">
      <Panel title="Stack Area Chart">
        <StackedAreaChart />
      </Panel>
    </div>
    <div className="col-sm-6">
      <Panel title="Cardinal Area Chart">
        <CardinalAreaChart />
      </Panel>
    </div>
    <div className="col-sm-6">
      <Panel title="Percent Area Chart">
        <PercentAreaChart />
      </Panel>
    </div>
    <div className="col-sm-6">
      <Panel title="Composed Chart">
        <LineBarAreaComposedChart />
      </Panel>
    </div>
  </div>
);

export default AreaCharts;
