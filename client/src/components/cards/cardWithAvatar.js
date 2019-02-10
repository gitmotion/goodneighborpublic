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
import cardimage from "../../img/card-iamge.jpg";

const CardWithAvatar = props => (
  <Card>
    {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar={avatar}
    /> */}
    <CardMedia
    // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src={cardimage} alt="" />
    </CardMedia>
    {/* <CardTitle>{props.title}Title</CardTitle>
    <CardTitle>{props.incidentTime}Date Time</CardTitle> */}
    <CardTitle title="Incident Title" subtitle="Inicident Date/Time" />
    <CardText>
      Incident Description Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
      pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque
      lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Up" />
      <FlatButton label="Down" />
      <FlatButton label="Comment Icon" />
    </CardActions>
  </Card>
);

export default CardWithAvatar;
