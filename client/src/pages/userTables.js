import React from 'react';
import Panel from '../components/panel.js';
import TableComponent from '../containers/table.js';
import UserTableComplex from '../components/tables/userTable.js';

const UserTables = () => (
  <div>
    <Panel title="Simple User Table">
      <TableComponent />
    </Panel>

    <Panel title="Complex Table">
      <UserTableComplex />
    </Panel>

  </div>

);

export default UserTables;
