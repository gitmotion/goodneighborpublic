import React from 'react';
import Panel from '../components/panel.js';
import SimpleRadarChart from '../components/charts/simpleRadarChart.js';
import DomainRadarChart from '../components/charts/domainRadarChart.js';
import SimpleRadialBarChart from '../components/charts/radiarBarChart.js';
import SimpleTreemap from '../components/charts/treemapChart.js';

const OtherCharts = () => (
  <div className="row">
    <div className="col-sm-6">
      <Panel title="Simple Radar Chart">
        <SimpleRadarChart />
      </Panel>
      <Panel title="Radial Bar Chart">
        <SimpleRadialBarChart />
      </Panel>
    </div>
    <div className="col-sm-6">
      <Panel title="Specified Domain Radar Chart">
        <DomainRadarChart />
      </Panel>

      <Panel title="Tree Map Chart">
        <SimpleTreemap />
      </Panel>
    </div>

  </div>
);

export default OtherCharts;
