import React from 'react';
import Panel from '../components/panel.js';
import DialogSimple from '../components/dialog/dialogSimple.js';
import DialogModal from '../components/dialog/dialogModal.js';
import DialogCustomWidth from '../components/dialog/dialogCustomStyle.js';
import DialogNestedDatePicker from '../components/dialog/dialogNested.js';
import DialogScrollable from '../components/dialog/dialogScrollable.js';
import DialogAlert from '../components/dialog/dialogAlert.js';

const Dialogs = () => (
  <div>
    <div className="row">
      <div className="col-sm-6">
        <Panel title="Simple Dialog" center={true}>
          <DialogSimple />
        </Panel>
        <Panel title="Dialog Custom Width" center={true}>
          <DialogCustomWidth />
        </Panel>
        <Panel title="Dialog Scrollable" center={true}>
          <DialogScrollable />
        </Panel>
      </div>
      <div className="col-sm-6">
        <Panel title="Modal Dialog" center={true}>
          <DialogModal />
        </Panel>
        <Panel title="Dialog With Nested Datepicker" center={true}>
          <DialogNestedDatePicker />
        </Panel>
        <Panel title="Dialog Alert" center={true}>
          <DialogAlert />
        </Panel>
      </div>
    </div>
  </div>
);

export default Dialogs;
