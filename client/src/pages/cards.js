import React from "react";
import Panel from "../components/panel.js";
import CardWithAvatar from "../components/cards/cardWithAvatar.js";
import CardExpandable from "../components/cards/cardExpanable.js";
import CardControled from "../components/cards/cardWithControl.js";
import CardComponent from "../components/cards/cardComponent.js";
import IncidentsService from "../services/IncidentsService";
import moment from "moment";
import { Tabs, Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import TabSwipeable from "../components/tabs/tabSwipeable";
import MapContainer from "../pages/incidentMap";
import Geocode from "react-geocode";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import InfoWindowEx from "../components/infoWindowEx.js";

const mapStyles = {
  width: "100%",
  height: "400px"
};

const mapContainerStyle = {
  height: "400px"
};

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: "",
      slideIndex: 0,
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
      incidents: [],
      vote: 0,
      upVotes: 0,
      downVotes: 0
    };
  }

  componentDidMount() {
    Geocode.setApiKey("AIzaSyCwceRI1qGErNEWxR2PHx2sz7CIcLR_1lA");
    IncidentsService.selectall(this.onSelectAllSuccess, this.onError);
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  handleChange = value => {
    this.setState({
      slideIndex: value
    });
  };

  onSelectAllSuccess = response => {
    console.log("test", response.data.items);
    const list = response.data.items;
    list.map(obj => {
      const newObj = obj;
      const newCreatedDate = moment(obj.createdDate).format(
        "MM-DD-YYYY hh:mm:ss"
      );
      newObj.createdDate = newCreatedDate;
      return newObj;
    });
    const newList = list.map(this.mapCard);
    this.setState({
      list: newList
    });
    this.setState(
      {
        incidents: response.data.items
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
          } else {
            // console.log(incident.location)
          }
        })
    );
  };

  mapCard = (list, index) => {
    return (
      <CardComponent
        key={list.id}
        id={list.id}
        offenseType={list.offenseType}
        incident={list.incident}
        createdDate={list.createdDate}
        additionalDescription={list.additionalDescription}
        votes={list.upvotes - list.downvotes}
        downVotes={list.downvotes}
        upVotes={list.upvotes}
        images={list.images.length > 0 ? list.images[0].url : ""}
      />
    );
  };

  render() {
    return (
      <div>
        <div className="col-md-12 px-0">
          <div className="container pl-0">
            <div className="mb-4" style={mapStyles}>
              <MapContainer />
            </div>
          </div>
        </div>

        <div className="row">{this.state.list}</div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCwceRI1qGErNEWxR2PHx2sz7CIcLR_1lA"
})(Cards);
