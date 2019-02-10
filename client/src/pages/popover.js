import React from 'react';
import Panel from '../components/panel.js';
import PopoverSimple from '../components/popovers/popoverSimple.js';
import PopoverAnimation from '../components/popovers/popoverSimple.js';
import PopoverConfigurable from '../components/popovers/popoverConfigurable.js';

const PopOvers = () => (
  <div className="row">
    <div className="col-md-6">
      <Panel title="Popover Simple" center={true}>
        <PopoverSimple />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Popover With Animation" center={true}>
        <PopoverAnimation />
      </Panel>
    </div>
    <div className="col-md-12">
      <Panel title="Popover Configurable">
        <PopoverConfigurable />
      </Panel>
    </div>
  </div>
);

export default PopOvers;
