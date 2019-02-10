import React from 'react';
import Panel from '../components/panel.js';
import BootstrapTable from '../components/tables/bootstrapTable.js';

const BootstrapTables = () => (
  <div>
    <Panel title="Simple Bootstrap Table">
      <BootstrapTable />
    </Panel>
    <Panel title="Table Striped">
      <BootstrapTable striped={true}/>
    </Panel>
    <Panel title="Table Bordered">
      <BootstrapTable bordered={true}/>
    </Panel>
    <Panel title="Table Hover">
      <BootstrapTable hover={true}/>
    </Panel>
    <Panel title="Table Condensed">
      <BootstrapTable condensed={true}/>
    </Panel>
  </div>

);

export default BootstrapTables;
