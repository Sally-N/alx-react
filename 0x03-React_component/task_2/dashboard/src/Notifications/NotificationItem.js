import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>	    
        {this.props.type && this.props.value ?
	  <li data-notification-type={this.props.type} onClick={() => this.props.markAsRead(this.props.id)}>{this.props.value}</li>
        : null}

        {this.props.html ? (
          <li data-urgent dangerouslySetInnerHTML={{ __html: this.props.html }}></li>
        ) : null}
      </>	    
    );     
 }


NotificationItem.defaultProps = {
  type: 'default',
  id: 0,
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default NotificationItem;
