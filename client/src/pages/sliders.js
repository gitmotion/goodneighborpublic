import React from 'react';
import Panel from '../components/panel.js';
import SliderSimple from '../components/sliders/sliderSimple.js'
import SliderControlled from '../components/sliders/sliderControlled.js';
import SliderAxis from '../components/sliders/sliderAxis.js';

const Sliders = () => {
  return (
    <div>
      <Panel title="Simple Slider">
        <SliderSimple />
      </Panel>
      <Panel title="Controlled Slider">
        <SliderControlled />
      </Panel>

      <Panel title="Slider Alternate Axis">
        <SliderAxis />
      </Panel>
    </div>
  );
}

export default Sliders;
