import React from 'react';
import Panel from '../components/panel.js';
import DatePickerSimple from '../components/datepickers/datepickerSimple.js';
import DatePickerInline from '../components/datepickers/datepickerInline.js';
import DatePickerControlled from '../components/datepickers/datepickerControlled.js';
import DatePickerDisableDates from '../components/datepickers/datepickerWithDisable.js';

const DatePickers = () => (
  <div>
    <Panel title="Simple Datepicker">
      <DatePickerSimple />
    </Panel>
    <Panel title="Datepicker With Disable Dates">
      <DatePickerDisableDates />
    </Panel>
    <Panel title="Datepicker Inline">
      <DatePickerInline />
    </Panel>
    <Panel title="Datepicker Controlled">
      <DatePickerControlled />
    </Panel>

  </div>
);

export default DatePickers;
