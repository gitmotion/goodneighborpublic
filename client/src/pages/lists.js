import React from 'react';
import Panel from '../components/panel.js'
import ListSimple from '../components/lists/listsSimple.js';
import ListChat from '../components/lists/listsChat.js';
import ListContacts from '../components/lists/listsContact.js';
import ListFolder from '../components/lists/listsFolder.js';

const Lists = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <Panel title="Simple List">
          <ListSimple />
        </Panel>
        <Panel title="Contact List">
          <ListContacts />
        </Panel>
      </div>
      <div className="col-md-6">
        <Panel title="Chat List">
          <ListChat />
        </Panel>
        <Panel title="Folder List">
          <ListFolder />
        </Panel>
      </div>
    </div>

  </div>
);

export default Lists;
