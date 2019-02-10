import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AvatarDropdown from '../components/avatarDropdown.js';
// import Notification from './notification.js';


class Header extends Component {

  render() {
    const style = {
      background: this.props.colorHeaderBanner.color
    }

    return (
      <header style={style} className="an-header">
        <div className="header-right">
          {/* <Notification/>
          <AvatarDropdown/> */}
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    colorHeaderBanner: state.headerBAnnerActiveStyle
  }
}

export default connect(mapStateToProps)(Header);
