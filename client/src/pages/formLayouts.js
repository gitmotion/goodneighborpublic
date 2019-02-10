import React from 'react';
import Panel from '../components/panel.js';
import {FormLayoutInline, FormLayoutFullWidth, FormLayoutWithLabel, FormLayoutWithTopLabel} from '../components/forms/formLayouts.js';

const FormLayouts = () => (
  <div className="row">
    <div className="col-md-12">
      <Panel title="Inline Form">
        <FormLayoutInline />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Form Full Width">
        <FormLayoutFullWidth />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Form With Label">
        <FormLayoutWithLabel />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Form With Top Label">
        <FormLayoutWithTopLabel />
      </Panel>
    </div>

  </div>

);

export default FormLayouts;
