import React from 'react';
import Panel from '../components/panel.js';
import {MenuSimple, MenuDisable} from '../components/menus/menuSimple.js';
import MenuIcons from '../components/menus/menuWithIcon.js';
import MenuSecondary from '../components/menus/menuSecondaryText.js';
import MenuNested from '../components/menus/menuNested.js';
import MenuIconControlled from '../components/menus/iconMenu.js';
import IconMenuNested from '../components/menus/iconMenuNested.js';
import DropdownMenuSimple from '../components/menus/dropdownMenu.js';

const Menus = () => (
  <div className="row">
    <div className="col-md-6">
      <Panel title="Simple Menu">
        <MenuSimple />
      </Panel>
      <Panel title="Menu With Icons">
        <MenuIcons />
      </Panel>
      <Panel title="Menu Nested">
        <MenuNested />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Menu With Disable Items">
        <MenuDisable />
      </Panel>
      <Panel title="Menu With Secondary Text">
        <MenuSecondary />
      </Panel>
      <Panel title="Icon Dropdown Menu">
        <MenuIconControlled />
      </Panel>
      <Panel title="Icon Menu Nested">
        <IconMenuNested />
      </Panel>
      <Panel title="Dropdown Menu">
        <DropdownMenuSimple />
      </Panel>
    </div>

  </div>

);

export default Menus;
