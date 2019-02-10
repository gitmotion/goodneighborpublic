import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Geocode from "react-geocode";
import InfoWindowEx from "../components/infoWindowEx.js";
import IncidentsService from "../services/IncidentsService.js";
import Icon from "@mdi/react";
import { mdiThumbUp, mdiThumbDown } from "@mdi/js";
import moment from "moment";

// const mapStyles = {
//     width: '1400px',
//     height: '500px'
// };

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
      incidents: [],
      upVotes: 0,
      downVotes: 0
    };
  }

  componentDidMount = () => {
    Geocode.setApiKey("GOOGLEAPIKEY");
    IncidentsService.selectall(this.onSelectAllSuccess, this.onSelectAllError);
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState(
      {
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      },
      () =>
        this.setState({
          upVotes: this.state.selectedPlace.upVotes,
          downVotes: this.state.selectedPlace.downVotes
        })
    );

  upVoteHandler = () => {
    let id = this.state.selectedPlace.incidentId;
    IncidentsService.selectbyid(
      id,
      this.onSelectByIdUpVoteSuccess,
      this.selectByIdError
    );
  };

  downVoteHandler = () => {
    let id = this.state.selectedPlace.incidentId;
    IncidentsService.selectbyid(
      id,
      this.onSelectByIdDownVoteSuccess,
      this.selectByIdError
    );
  };

  onVotesSuccess = resp => {
    console.log(resp);
  };

  onVotesError = err => {
    console.log(err);
  };

  onSelectAllSuccess = resp => {
    console.log(resp.data.items);
    this.setState(
      {
        incidents: resp.data.items
      },
      () =>
        this.state.incidents.map((incident, i) => {
          if (
            !incident.location.match(
              /^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/g
            )
          ) {
            Geocode.fromAddress(incident.location).then(
              response => {
                const { lat, lng } = response.results[0].geometry.location;
                let incidents = [...this.state.incidents];
                incident.location = lat + ", " + lng;
                // console.log(incidents)
                this.setState({
                  incidents
                });
              },
              error => {
                console.error(error);
              }
            );
          }
        })
    );
  };

  onSelectAllError = err => {
    console.log(err);
  };

  onSelectByIdUpVoteSuccess = resp => {
    let response = resp.data.item;
    let data = {
      id: response.id,
      upVotes: response.upvotes + 1,
      downVotes: response.downvotes
    };

    this.setState({
      upVotes: response.upvotes + 1,
      downVotes: response.downvotes
    });

    IncidentsService.votes(data, this.onUpdateSuccess, this.onUpdateError);
  };

  onSelectByIdDownVoteSuccess = resp => {
    let response = resp.data.item;
    let data = {
      id: response.id,
      upVotes: response.upvotes,
      downVotes: response.downvotes + 1
    };

    this.setState({
      upVotes: response.upvotes,
      downVotes: response.downvotes + 1
    });

    IncidentsService.votes(data, this.onUpdateSuccess, this.onUpdateError);
  };

  onUpdateSuccess = resp => {
    IncidentsService.selectall(this.onSelectAllSuccess, this.onSelectAllError);
  };

  onUpdateError = err => {
    console.log(err);
  };

  onselectByIdError = err => {
    console.log(err);
  };

  incidentDateFormat = date => {
    const momentDate = moment(date).format("MM-DD-YYYY");
    return momentDate;
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        // style={mapStyles}
        initialCenter={{
          lat: 33.7701,
          lng: -118.1937
        }}
        onClick={this.mapClicked}
      >
        {this.state.incidents.map((incident, i) => {
          let geoLocation = incident.location.split(",");
          return (
            <Marker
              key={i}
              onClick={this.onMarkerClick}
              position={{ lat: geoLocation[0], lng: geoLocation[1] }}
              incidentId={incident.id}
              upVotes={incident.upvotes}
              downVotes={incident.downvotes}
              offenseType={incident.offenseType}
              incident={incident.incident}
              incidentDate={this.incidentDateFormat(incident.incidentDate)}
              incidentTime={incident.incidentTime}
              additionalDescription={incident.additionalDescription}
            />
          );
        })}

        <InfoWindowEx
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
          style={{ width: "100px" }}
        >
          <div className="container">
            <div className="row mt-2">
              <div className="col-sm-12">
                <h6 className="mb-0 font-weight-bold">
                  {this.state.selectedPlace.incident}
                </h6>
                <small className="text-muted">
                  {this.state.selectedPlace.offenseType}{" "}
                  <span className="ml-2">
                    {this.state.selectedPlace.incidentDate}
                  </span>{" "}
                  <span>{this.state.selectedPlace.incidentTime}</span>
                </small>
                <p
                  className="mt-2 mb-1"
                  hidden={!this.state.selectedPlace.additionalDescription}
                >
                  {this.state.selectedPlace.additionalDescription
                    ? this.state.selectedPlace.additionalDescription
                    : ""}
                </p>
              </div>
            </div>
            <div className="row mt-2">
              <span className="pt-2 ml-3" style={{ width: "20px" }}>
                {" "}
                {this.state.upVotes}{" "}
              </span>
              <Icon
                path={mdiThumbUp}
                color="green"
                onClick={() => this.upVoteHandler()}
                size={1}
                style={{ height: "25px" }}
              />
              <div
                className="mx-2 pt-1 font-weight-bold"
                style={{ fontSize: "18px" }}
              >
                {this.state.upVotes - this.state.downVotes}
              </div>
              <Icon
                className="pt-1"
                path={mdiThumbDown}
                color="red"
                onClick={() => this.downVoteHandler()}
                size={1}
                style={{ height: "32px" }}
              />
              <span className="pt-2 ml-2"> {this.state.downVotes} </span>
            </div>
          </div>
        </InfoWindowEx>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "GOOGLEAPIKEY"
})(MapContainer);
