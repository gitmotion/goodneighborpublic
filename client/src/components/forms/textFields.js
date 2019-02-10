import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
}

const TextFieldSimple = () => (
  <div>
    <TextField
      hintText="Type of Offense"
      floatingLabelText="Offense Type"
      type="text"
    /><br />
    <TextField
      hintText="What happened?"
      floatingLabelText="Incident"
    /><br />
    <TextField
      hintText="When did this occur?"
      floatingLabelText="Incident Date"
    /><br />
    <TextField
      hintText="What time did it occur?"
      floatingLabelText="Incident Time"
    /><br />
    <TextField
      hintText="Where did this happen?"
      floatingLabelText="Location"
    />
    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
    
    <br />
    <DatePicker hintText="Portrait Dialog" />
    <TextField
      hintText="Additional information"
      floatingLabelText="Additional Description"
    /><br />
    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
  </div>
);

export default TextFieldSimple;
