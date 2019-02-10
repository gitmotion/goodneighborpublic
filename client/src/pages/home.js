/**
 * Filename: home.js
 * Home page
 * Component path
 * IconBoxed  'componenet/iconboxes.js'
 * Charts compoenent from 'compoenent/charts'
 * Table from 'containers/table.js'
 */

import React from "react";
import IconBoxes from "../components/iconBoxes.js";
import Panel from "../components/panel.js";
import SimpleAreaChart from "../charts/simpleAreaChart.js";
import SimpleLineChart from "../charts/simpleLineChart.js";
import TableComponent from "../containers/table.js";
import CardWithAvatar from "../components/cards/cardWithAvatar.js";
import Cards from "./cards";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import MapContainer from "../pages/incidentMap";

const Home = () => {
  return (
    <div>
      <div>
        <Cards />
      </div>
      {/* <IconBoxes /> */}
      {/* <div className="row">
        <div className="col-md-6">
          <Panel title="Total Earns" righticon={true}>
            <SimpleAreaChart />
          </Panel>
        </div>

        <div className="col-md-6">
          <Panel title="Total Sales" righticon={true}>
            <SimpleLineChart />
          </Panel>
        </div>
      </div>
      <Panel title="User Table" righticon={true}>
        <TableComponent />
      </Panel> */}
    </div>
  );
};

export default Home;
