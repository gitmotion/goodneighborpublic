import React from 'react';
import SimpleAppBar from '../components/appbars/simpleAppBar.js';
import SecondaryAppBar from '../components/appbars/secondaryAppBar.js';
import ButtonAppBar from '../components/appbars/buttonAppBar.js';
import ComplexAppBar from '../components/appbars/complexAppBar.js';
import Panel from '../components/panel.js';

const AppBars = () => (
  <div>
    <Panel title="Simple App Bar">
      <SimpleAppBar />
    </Panel>
    <Panel title="Secondary App Bar">
      <SecondaryAppBar/>
    </Panel>
    <Panel title="Button App Bar">
      <ButtonAppBar/>
    </Panel>

    <Panel title="Complex App Bar">
      <ComplexAppBar/>
    </Panel>

  </div>
);

export default AppBars;
