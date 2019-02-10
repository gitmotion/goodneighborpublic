import React from 'react';
import Panel from '../components/panel.js';
import TabSimple from '../components/tabs/tabSimple.js';
import TabControlled from '../components/tabs/tabControlled.js';
import TabSwipeable from '../components/tabs/tabSwipeable.js';
import TabIcon from '../components/tabs/tabWithIcon.js';
import TabIconText from '../components/tabs/tabIconWithText.js';

const Tabs = () => (
  <div>
    <Panel title="Simple Tab">
      <TabSimple />
    </Panel>
    <Panel title="Controlled Tab">
      <TabControlled />
    </Panel>
    <Panel title="Swipeable Tab">
      <TabSwipeable />
    </Panel>
    <Panel title="Tab With Icons">
      <TabIcon />
    </Panel>
    <Panel title="Tab Icons With Text">
      <TabIconText />
    </Panel>
  </div>

);

export default Tabs;
