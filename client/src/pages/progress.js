import React from 'react';
import Panel from '../components/panel.js';
import CircularProgressSimple from '../components/progress/circularProgress.js';
import CircularProgressDeterminate from '../components/progress/determinedProgress.js';
import {LinearProgressSimple, LinearProgressDeterminate} from '../components/progress/linearProgress.js';
import RefreshIndicatorSimple from '../components/progress/refreshIndicator.js';
import RefreshIndicatorLoading from '../components/progress/refreshLoading.js';

const ProgressBars = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <Panel title="Circular Progress">
          <CircularProgressSimple />
        </Panel>
      </div>
      <div className="col-md-6">
        <Panel title="Circular Progress Determinate">
          <CircularProgressDeterminate />
        </Panel>
      </div>
      <div className="col-md-12">
        <Panel title="Linear Progress Simple">
          <LinearProgressSimple />
        </Panel>
      </div>
      <div className="col-md-12">
        <Panel title="Linear Progress Determinate">
          <LinearProgressDeterminate />
        </Panel>
      </div>
      <div className="col-md-12">
        <Panel title="Refresh Indicator Simple">
          <RefreshIndicatorSimple />
        </Panel>
      </div>
      <div className="col-md-12">
        <Panel title="Refresh Indicator Loading">
          <RefreshIndicatorLoading />
        </Panel>
      </div>
    </div>
  </div>
);

export default ProgressBars;
