import React from "react";
import PropTypes from 'prop-types';

function NotificationItemShape(props) {

}

NotificationItemShape.PropTypes = {
  id: PropTypes.number.isRequired,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default NotificationItemShape;
