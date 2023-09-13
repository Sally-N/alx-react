import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite/no-important';


class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.Wrapper)}>
        <div className={css(styles.menuItem)} onClick={this.props.handleDisplayDrawer}>
          Your notifications
        </div>
        {this.props.displayDrawer ?
          <div className={css(styles.Notifications)}>
            <button className={css(styles.NotificationsBtn)}
              aria-label="Close"
              onClick={(e) => {
                console.log('Close button has been clicked');
                this.props.handleHideDrawer();
              }}
            >
              <img src={closeIcon} alt="close icon" width="15px" />
            </button>
            {
              this.props.listNotifications.length != 0 ?
                <p className={css(styles.notiHeader)}>Here is the list of notifications</p>
                : null
            }
            <ul>
              {
                this.props.listNotifications.length == 0 ?
                  <NotificationItem type="default" value="No new notification for now" />
                  : null
              }
              {
                this.props.listNotifications.map((val, idx) => {
                  return <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                    markAsRead={this.props.markNotificationAsRead}
                    id={val.id}
                  />
                })
              }
            </ul>
          </div>
          :
          null
        }

      </div>
    );
  }
}

const smallScreen = {
  small: '@media screen and (max-width: 900px)'
};

const opacity = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateY = {
  '0%': {
    transform: "translateY(0)",
  },

  '50%': {
    transform: "translateY(-5px)",
  },

  '75%': {
    transform: "translateY(5px)",
  },

  '100%': {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  menuItem: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    textAlign: 'right',
    fontWeight: 'bold',
    padding: '5px',
    [smallScreen.small]: {
      display: 'none'
    },
    ":hover": {
      cursor: 'pointer',
      animationName: [opacity, translateY],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3
    }
  },
  notiHeader: {
    width: '100%'
  },
  Notifications: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    border: '3px dotted #e1484c',
    padding: '6px 12px',
    position: 'relative',
    marginTop: 12,
    [smallScreen.small]: {
      display: 'block',
      width: '100vw',
      height: '100vh',
      fontSize: 20,
      background: '#fff',
      padding: 0,
      border: 'none',
      margin: 0,
      listStyle: 'none'
    }
  },
  NotificationsBtn: {
    color: '#3a3a3a',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    fontSize: '15px',
    position: 'absolute',
    right: '3px',
    top: '3px',
    cursor: 'pointer',
    outline: 'none',
  },
  Wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'end'
  }
})

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
  markNotificationAsRead: () => { }
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

export default Notifications;
