import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
    this.showNotification = this.showNotification.bind(this);
  };

  showAllNotifications() {
    return  this.props.notifications.map((notification) => {
      let imageUrl = notification.avatar;
      const style = {
        background: 'url('+ imageUrl + ')'
      }

      const notificationType = classNames ({
        'success' : notification.success,
        'avatar': true,
        'avatar-icon': true,
        'warning': notification.warning,
        'danger': notification.danger,
      });

      return (
        <div key={notification.id} className="notification-single">

          { notification.avatar !== ''
          ? <div className="avatar" style={style}></div>
          : <div className="avatar avatar-icon"><i className="fa fa-user"></i></div>
          }

          { notification.icon ? <div className={notificationType}><i className={notification.icon}></i></div> : ''}

          <p className="details">
            { notification.name ? <a href="">{notification.name}</a> : ''}
            <span>{notification.detail}</span>
          </p>
          <p className="time">{notification.time}</p>
        </div>
      );
    });
  }

  showNotification() {
    this.setState({toggle: !this.state.toggle});

  }
  render() {
    const toggleNotification = classNames ({
      'slide-content': true,
      'toggle' : this.state.toggle,
    });

    return (
      <div>
        <button className="notification-trigger an-circle-icon-btn notification" onClick={this.showNotification}>
          <i className="fa fa-flash"></i>
        </button>
        <div className={toggleNotification}>
          <h6>Latest Activities</h6>
          {this.showAllNotifications()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  }
}

export default  connect(mapStateToProps)(Notification);
