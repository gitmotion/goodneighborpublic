import React from 'react';
import Panel from '../components/panel.js';
import GridListSimple from '../components/grid-list/gridlistSimple.js';
import GridListComplex from '../components/grid-list/gridlistComplex.js';
import GridListSingleLine from '../components/grid-list/gridlistInline.js';

const GridLists = () => (
  <div>
    <Panel title="Grid List Simple">
      <GridListSimple />
    </Panel>
    <Panel title="Grid List Complex">
      <GridListComplex />
    </Panel>
    <Panel title="Grid List Inline">
      <GridListSingleLine />
    </Panel>
  </div>

);

export default GridLists;
