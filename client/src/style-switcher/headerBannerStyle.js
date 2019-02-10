import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {selectedHeaderBannerStyle} from '../actions/headerBannerAction.js';

class HeaderBannerStyle extends Component {
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
          onClick={() => this.props.selectedHeaderBannerStyle(color)}

          uncheckedIcon={<i className="material-icons" style={{ color: color.color}}>lens</i>}
          checkedIcon={<i className="material-icons" style={{ color: color.color }}>radio_button_checked</i>}
        />
      );
    });
  }

  render() {

    return (
      <div>
        <h6>Header BAnner Style</h6>
        <RadioButtonGroup name="bannerName" className="radio-group">
          {this.colorOptions()}
        </RadioButtonGroup>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    colorValues: state.headerBannerStyle,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectedHeaderBannerStyle: selectedHeaderBannerStyle}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HeaderBannerStyle);
