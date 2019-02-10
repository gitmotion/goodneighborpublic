import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {selectedSidebarStyle} from '../actions/sidebarStyleAction.js';

class SidebarStyle extends Component {
  constructor(props) {
    super(props);
    this.colorOptions = this.colorOptions.bind(this);
  }

  colorOptions() {
    const style = {
      fontSize: '14px',
    }
    return this.props.colorValues.map((color, index) => {
      return (
        <RadioButton
          key={index}
          value={color.color}
          style={style}
          onClick={() => this.props.selectedSidebarStyle(color)}
          uncheckedIcon={<i className="material-icons" style={{ color: color.color}}>lens</i>}
          checkedIcon={<i className="material-icons" style={{ color: color.color }}>radio_button_checked</i>}
        />
      );
    });
  }

  render() {

    return (
      <div>
        <h6>Sidebar Style</h6>
        <RadioButtonGroup name="sidebarstyleoptions" className="radio-group">
          {this.colorOptions()}
        </RadioButtonGroup>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    colorValues: state.sidebarStyle,
  }
}

function matchDispatchToProps(dispatch) {
 return bindActionCreators({selectedSidebarStyle: selectedSidebarStyle}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SidebarStyle);
