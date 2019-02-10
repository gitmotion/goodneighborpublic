import React, { Component } from 'react';
import HeaderLeftStyle from './headerLeftStyle.js';
import SidebarStyle from './sidebarStyle.js';
import HeaderBannerStyle from './headerBannerStyle.js';
import classNames from 'classnames';
import IconButton from 'material-ui/IconButton';

class StyleSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switcherToggle: false
    }
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch() {
    this.setState({ switcherToggle: !this.state.switcherToggle })
  }

  render() {
    const switcherClass = classNames({
      'readmin-style-switcher': true,
      'toggle': this.state.switcherToggle,
    });

    return (
      <div className={switcherClass}>
        <button className="style-toggle" hidden onClick={this.toggleSwitch}>
          <i className="fa fa-cog fa-spin fa-2x fa-fw"></i>
        </button>
        <IconButton className="clear-btn" onClick={this.toggleSwitch}>
          <i className="material-icons">clear</i>
        </IconButton>
        <p>Style Switcher</p>
        <div className="overflow-content">
          <HeaderLeftStyle />
          <HeaderBannerStyle />
          <SidebarStyle />
        </div>
      </div>
    );
  }
}

export default StyleSwitcher;



