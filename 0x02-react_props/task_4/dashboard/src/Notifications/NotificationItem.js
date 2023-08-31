import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ props }) {
  let li;

  value
    ? (li = <li data-notification-type={props.type}>{props.value}</li>)
    : (li = (
        <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>
      ));

  return li;
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
