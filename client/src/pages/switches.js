import React from 'react';
import Panel from '../components/panel.js';
import {CheckboxSimple,CheckboxRightCheck} from '../components/forms/checkbox.js';
import {RadioButtonSimple, RadioButtonLeftLabel} from '../components/forms/radionButton.js';
import ToggleSimple from '../components/forms/toggleButton.js';

const Switches = () => (
  <div className="row">
    <div className="col-md-6">
      <Panel title="Checkbox Simple">
        <CheckboxSimple />
      </Panel>
      <Panel title="Checkbox Simple">
        <RadioButtonSimple />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Radion Button">
        <CheckboxRightCheck />
      </Panel>
      <Panel title="Radio Button Left Label">
        <RadioButtonLeftLabel />
      </Panel>
    </div>
    <div className="col-md-12">
      <Panel title="Toggle Buttons">
        <ToggleSimple />
      </Panel>
    </div>
  </div>

);

export default Switches;
