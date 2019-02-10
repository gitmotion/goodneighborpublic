import React from 'react';
import FlatButtons from '../components/buttons/flatButtons.js';
import ComplexButtons from '../components/buttons/complexButtons.js';
import FlatIconButtons from '../components/buttons/flatIconButtons.js';
import RaisedButtons from '../components/buttons/raisedButtons.js';
import RaisedComplexButtons from '../components/buttons/raisedComplexButtons.js';
import RaisedIconButtons from '../components/buttons/raisedIconButtons.js';
import FloatingActionButtons from '../components/buttons/floatingActionButtons.js';
import IconTooltipButtons from '../components/buttons/iconTooltipButtons.js';

const Buttons = () => {
  return (
    <div>
      <div className="row justify-content-start">
        <div className="col-md-6">
          <FlatButtons />
          <ComplexButtons />
          <RaisedComplexButtons />
          <FloatingActionButtons />
        </div>
        <div className="col-md-6">
          <FlatIconButtons />
          <RaisedButtons />
          <RaisedIconButtons />
          <IconTooltipButtons />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
