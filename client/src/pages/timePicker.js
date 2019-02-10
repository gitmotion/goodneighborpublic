import React from 'react';
import Panel from '../components/panel.js';
import TimePickerSimple from '../components/timepickers/timepickerSimple.js';
import TimePickerControlled from '../components/timepickers/timepickerControlled.js';
import TimePickerInternational from '../components/timepickers/timepickerLocalized.js';

const TimePickers = () => (
  <div>
    <Panel title="Time Picker Simple">
      <TimePickerSimple />
    </Panel>
    <Panel title="Time Picker Controlled">
      <TimePickerControlled />
    </Panel>
    <Panel title="Time Picker International">
      <TimePickerInternational />
    </Panel>
  </div>

);

export default TimePickers;
