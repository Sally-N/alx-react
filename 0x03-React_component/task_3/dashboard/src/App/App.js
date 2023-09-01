import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {	  
      listCourses: [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit:40}
      ],
    
      listNotifications: [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: getLatestNotification()}
      ]
    };
    
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }	  
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={this.state.listNotifications} />
        <div className="App">
          <Header />
          {this.props.isLoggedIn 
	    ? <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={this.state.listCourses} /></BodySectionWithMarginBottom> 
	    : <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
	  }
	  <BodySection title="News from the School">
	    <p>Hello School!</p>
	  </BodySection>  
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
