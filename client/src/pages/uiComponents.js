import React from 'react';
import Panel from '../components/panel.js';
import AvatarSimple from '../components/ui-components/avatar.js';
import Badges from '../components/ui-components/badge.js';
import ButtonNavigations from '../components/ui-components/buttonNavigations.js';
import Chips from '../components/ui-components/chips.js';
import DividerList from '../components/ui-components/divider.js';
import {PaperRounded, PaperNoRounded, PaperCircle} from '../components/ui-components/papers.js';
import ToolbarSimple from '../components/ui-components/toolbar.js';

const UiComponents = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <Panel title="Avart List">
          <AvatarSimple />
        </Panel>
        <Panel title="Divider">
          <DividerList />
        </Panel>

        <Panel title="Paper Rounded">
          <PaperRounded />
        </Panel>
      </div>
      <div className="col-md-6">
        <Panel title="Badges">
          <Badges />
        </Panel>

        <Panel title="Button Navigation">
          <ButtonNavigations />
        </Panel>

        <Panel title="Chips">
          <Chips />
        </Panel>

        <Panel title="Paper Non-ounded">
          <PaperNoRounded />
        </Panel>

        <Panel title="Paper Circle">
          <PaperCircle />
        </Panel>

      </div>
    </div>
    <Panel title="Simple Toolbar">
      <ToolbarSimple />
    </Panel>

  </div>
);

export default UiComponents;
