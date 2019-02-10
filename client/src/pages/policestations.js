import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import imageUrl from "../img/lpbd.jpg";
import PoliceStationsService from "../services/PoliceStationsService";

const style = {
  backgroundImage: "url(" + imageUrl + ")",
  backgroundSize: "cover",
  backgroundPosition: "center center"
};

const mapStyles = {
  width: "100%",
  height: "auto"
};

const mapContainerStyle = {
  height: "200px"
};

class PoliceStations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policestations: []
    };
  }

  componentDidMount = () => {
    PoliceStationsService.SelectAll(
      this.onSelectAllSuccess,
      this.onSelectAllError
    );
  };

  onSelectAllSuccess = resp => {
    console.log("Select All success", resp);
    this.setState({
      policestations: resp.data.features
    });
  };

  onSelectAllError = err => {
    console.log("Select All error", err);
  };

  loop() {
    return this.state.policestations.map(obj => {
      return (
        <div className="col-md-4" key={obj.attributes.OBJECTID}>
          <div className="blog-single px-0">
            <div className="container details pl-0 pt-0 pb-5">
              <div className="my-5 pb-5" style={mapContainerStyle}>
                <Map
                  google={this.props.google}
                  zoom={14}
                  style={mapStyles}
                  initialCenter={{
                    lat: obj.geometry.y,
                    lng: obj.geometry.x
                  }}
                >
                  <Marker
                    position={{ lat: obj.geometry.y, lng: obj.geometry.x }}
                  />
                </Map>
              </div>
            </div>

            <div className="details">
              <a
                href={obj.attributes.URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5>{obj.attributes.NAME}</h5>
              </a>
              <p>{obj.attributes.TELEPHONE}</p>
              <p>{obj.attributes.ADDRESS}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="re-page-banner mb-0" style={style}>
          <div className="overlay" />
          <h1 className="text-center">Police Departments</h1>
        </div>
        <div className="row">{this.loop()}</div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "GOOGLEAPIKEY"
})(PoliceStations);
