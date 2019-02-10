import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import avatar from "../../img/uxceo-128.jpg";
import Panel from "../../components/panel.js";
import Icon from "@mdi/react";
import { mdiThumbUp, mdiThumbDown } from "@mdi/js";

const CardComponent = props => (
  <div className="card col-md-4 mb-3">
    <div className="card-body">
      <span className="mdi mdi-chevron-down-circle-outline" />
      {props.images ? (
        <img
          src={props.images}
          width="100%"
          height="auto"
          alt={props.offenseType}
        />
      ) : (
        ""
      )}
      <h5>{props.offenseType}</h5>
      <h6 className="card-subtitle mb-4 text-muted">
        Reported on: {props.createdDate}
      </h6>
      <p>{props.incident}</p>
      <p>{props.additionalDescription}</p>
      <div className="row mt-2">
        <span className="pt-2 ml-2" style={{ width: "20px" }}>
          {" "}
          {props.upVotes}{" "}
        </span>
        <Icon
          path={mdiThumbUp}
          color="green"
          size={1}
          style={{ height: "30px" }}
          className="pt-2"
        />
        <span
          className="pt-1 mx-2 mb-1 font-weight-bold"
          style={{ fontSize: "18px" }}
        >
          {" "}
        </span>
        <Icon
          path={mdiThumbDown}
          color="red"
          size={1}
          style={{ height: "38px" }}
          className="pt-2"
        />
        <span className="pt-2 ml-2"> {props.downVotes} </span>
      </div>
      <span className="mdi-comment-outline" />
    </div>
  </div>
);

export default CardComponent;
