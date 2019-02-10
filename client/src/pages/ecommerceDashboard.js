import React from 'react';
import Panel from '../components/panel.js';
import IconBoxesAlter from '../components/iconBoxAlter.js'
import ProductsTable from '../containers/productsTable.js';
import TableComponent from '../containers/table.js';
import CustomShapeBarChart from '../components/charts/customShapeBarChart.js';
import {BoxSingle} from '../components/iconBoxes.js';
import TinyAreaChart from '../charts/tinyAreaChart.js';

const EcommerceDashboard = () => (
  <div>
    <IconBoxesAlter />
    <div className="row">
      <div className="col-md-7">
        <Panel title="Most Viewed Products" righticon={true}>
          <ProductsTable />
        </Panel>
      </div>
      <div className="col-md-5">
        <Panel title="Total Revenue Graph" righticon={true}>
          <CustomShapeBarChart />
        </Panel>

        <BoxSingle
          iconbg="#40c741"
          icon="monetization_on"
          title="9, 693"
          subtitle="Revenues"
        >
          <TinyAreaChart />
        </BoxSingle>
      </div>
    </div>
    <Panel
      title="Active Support Agents"
      righticon={true}
    >
      <TableComponent />
    </Panel>

  </div>

);

export default EcommerceDashboard;
