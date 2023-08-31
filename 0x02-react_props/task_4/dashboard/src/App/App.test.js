import React from 'react';
import App from './App';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from 'enzyme';

describe('App tests', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });
  it('should render Notifications component', () => {
    const component = shallow(<App />);
    expect(component.find('<Notifications />')).toBe(true);
  });
  it('should render Header component', () => {
    const component = shallow(<App />);
    expect(component.find('<Header />')).toBe(true);
  });
  it('should render Login component', () => {
    const component = shallow(<App />);
    expect(component.find('<Login />')).toBe(true);
  });
  it('should render Footer component', () => {
    const component = shallow(<App />);
    expect(component.find('<Footer />')).toBe(true);
  });
});
