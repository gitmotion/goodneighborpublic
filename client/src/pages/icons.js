import React from 'react';
import Panel from '../components/panel.js';
import FontIconSimple from '../components/icons/fontIcon.js';
import SvgIconSimple from '../components/icons/svgIcons.js';
import SnackbarSimple from '../components/snackbar/snackbarSimple.js';
//import SnackbarAction from '../components/snackbar/snackbarWithActions.js';
import SnackbarTwice from '../components/snackbar/snackbarConsecutive.js';

const Icons = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <Panel title="Font Icons">
          <FontIconSimple />
        </Panel>
      </div>
      <div className="col-md-6">
        <Panel title="Svg Icons">
          <SvgIconSimple />
        </Panel>
      </div>
      <div className="col-md-12">
        <Panel title="Simple Snackbar" center={true}>
          <SnackbarSimple />
        </Panel>
      </div>

      <div className="col-md-12">
        <Panel title="Snackbar Consecutive" center={true}>
          <SnackbarTwice />
        </Panel>
      </div>
    </div>

  </div>
);

export default Icons;
