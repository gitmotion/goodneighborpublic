import React from 'react';
import Panel from '../components/panel.js';
import TextFieldSimple from '../components/forms/textFields.js';
import TextFieldError from '../components/forms/textFieldsError.js';
import TextFieldCustomize from '../components/forms/textFieldsWithCustomStyle.js';
import SelectFieldSimple from '../components/forms/selectFields.js';
import SelectFieldLong from '../components/forms/selectFieldsLong.js';
import SelectFieldMultiSelect from '../components/forms/selectFieldMultiple.js';
import AutoCompleteSimple from '../components/forms/autoComplete.js';
import AutoCompleteDataSource from '../components/forms/autoCompleteDataSource.js';
import AutoCompleteControlled from '../components/forms/autoCompleteControlled.js';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IncidentsService from '../services/IncidentsService'
import FileStorageService from '../services/FileStorageService'
import SweetAlert from 'react-bootstrap-sweetalert'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginRight: 5
};

const fileInputStyles = {
  button: {
    margin: 12,
  },
  imageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const x = document.getElementById("geolocationBtn");

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offenseType: "",
      incident: "",
      incidentDate: "",
      incidentTime: "",
      location: "",
      additionalDescription: "",
      fileUpload: '',
      fileName: '',
      sweetAlertAddShow: false
    };
  }

  handleClick = evt => {
    const data = {
      offenseType: this.state.offenseType,
      incident: this.state.incident,
      incidentDate: this.state.incidentDate,
      incidentTime: this.state.incidentTime,
      location: this.state.location,
      additionalDescription: this.state.additionalDescription
    };
    console.log("FORM DATA", data);
    IncidentsService.create(data, this.onCreateSuccess, this.onCreateError);
  };

  onCreateSuccess = resp => {
    console.log(resp);
    this.setState({
      sweetAlertAddShow: true,
      offenseType: "",
      incident: "",
      incidentDate: "",
      incidentTime: "",
      location: "",
      additionalDescription: ""
    });
    this.props.history.push("/");

    // console.log("NEW INCIDENT ID", resp.data.item)
    console.log("FILE DATA", this.state.fileUpload);
    if (this.state.fileUpload) {
      let fileData = this.state.fileUpload;
      console.log("Uploading File", fileData);
      FileStorageService.create(
        resp.data.item,
        fileData,
        this.UploadSuccess,
        this.UploadError
      );
    }
  };

  onCreateError = err => {
    console.log(err);
  };

  UploadSuccess = resp => {
    console.log("Upload Successful", resp);
    // alert("Upload was successful");
    // window.location.reload();
    this.setState({
      fileUpload: "",
      sweetAlertAddShow: true
    });
  };

  // ON UPLOAD ERROR
  UploadError = err => {
    console.log("Upload Error", err);
    // alert("Upload failed, please try again");
  };

  handleChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({
      [key]: val
    });
  };

  addYourLocation = e => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setLocation);
    } else {
      alert("You must allow GeoLocation");
    }
  };

  setLocation = position => {
    console.log(position);
    const latLong = position.coords.latitude + ", " + position.coords.longitude;
    console.log("LATLONG:", latLong);
    this.setState({
      location: latLong
    });
  };

  onFileInput = e => {
    console.log("File was added to input");

    // GRABBING THE FILE FROM THE INPUT
    const file = e.target.files[0];
    console.log("Added File:", file.name);

    // FORMATTING THE FILE INTO FORMDATA
    let fileData = new FormData();
    fileData.append("file", file);
    console.log(fileData);

    // SETTING THE STATE OF THE FORMDATA
    this.setState({
      fileUpload: fileData,
      fileName: file.name
    });
  }

  sweetAlertHide = () => {
    this.setState({
      sweetAlertAddShow: false
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <Panel title="Report an Incident">
            <div>
              <TextField
                name="offenseType"
                hintText="Type of Offense"
                floatingLabelText="Offense Type"
                type="text"
                fullWidth
                value={this.state.offenseType}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                name="incident"
                hintText="What happened?"
                floatingLabelText="Incident"
                type="text"
                fullWidth
                value={this.state.incident}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                name="incidentDate"
                hintText="When did this occur?"
                floatingLabelText="Incident Date"
                type="text"
                fullWidth
                value={this.state.incidentDate}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                name="incidentTime"
                hintText="What time did it occur?"
                floatingLabelText="Incident Time"
                type="text"
                fullWidth
                value={this.state.incidentTime}
                onChange={this.handleChange}
              />
              {/* <DatePicker hintText="Portrait Dialog" /> */}
              <br />
              <TextField
                name="location"
                hintText="Address, City, Geolocation"
                floatingLabelText="Location"
                type="text"
                fullWidth
                value={this.state.location}
                onChange={this.handleChange}
              />
              <button id="geolocationBtn" type="button" className="btn btn-sm btn-primary" onClick={this.addYourLocation}>Use Geolocation</button>
              <br />
              <TextField
                name="additionalDescription"
                hintText="Additional information"
                floatingLabelText="Additional Description"
                type="text"
                fullWidth
                value={this.state.additionalDescription}
                onChange={this.handleChange}
              /><br />
              <small className="mt-3" style={{ fontWeight: 'bold' }}>Add an Image (optional):</small>


              <RaisedButton
                label="Choose an Image"
                labelPosition="before"
                style={fileInputStyles.button}
                containerElement="label"

              >
                <input type="file" style={fileInputStyles.imageInput} onChange={this.onFileInput} />
              </RaisedButton>
              <small>{this.state.fileName}</small>


              {/* <div class="file-field">
                  <div class="btn btn-primary btn-sm float-left">
                    <span>Choose file</span>
                    <input type="file" onChange={this.onFileInput} />
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload your file" />
                  </div>
                </div> */}

              {/* <input type="file" className="form-control btn-file" onChange={this.onFileInput} /> */}
              <br />
              <button type="button" className="btn btn-primary float-right" onClick={this.handleClick}>Submit</button>
            </div>
          </Panel>
        </div>

        <SweetAlert
          success
          title="Incident Reported"
          show={this.state.sweetAlertAddShow}
          onConfirm={this.sweetAlertHide}
          className="col-md-6 mx-auto"
        >
        </SweetAlert >
      </div>
    );
  }
}

export default Form;
