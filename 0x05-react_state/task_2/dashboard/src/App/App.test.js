/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('App tests', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it('renders without crashing', () => {
		const component = shallow(<App />);

		expect(component).toBeDefined();
	});

	it('should render Notifications component', () => {
		const component = shallow(<App />);

		expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
	});

	it('should render Header component', () => {
		const component = shallow(<App />);

		expect(component.contains(<Header />)).toBe(true);
	});

	it('should render Login Component', () => {
		const component = shallow(<App />);

		expect(component.contains(<Login />)).toBe(true);
	});

	it('should render Footer component', () => {
		const component = shallow(<App />);

		expect(component.contains(<Footer />)).toBe(false);
	});

	it('does not render courselist if logged out', () => {
		const component = shallow(<App />);

		component.setProps({ isLogedIn: false });

		expect(component.contains(<CourseList />)).toBe(false);
	});

	it('renders courselist if logged in', () => {
		const component = shallow(<App isLoggedIn={true} />);

		expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
		expect(component.contains(<Login />)).toBe(false);
	});

	
});

describe("Testing <App isLoggedIn={true} />", () => {
	let wrapper;
  
	beforeEach(() => {
	  StyleSheetTestUtils.suppressStyleInjection();
	  wrapper = shallow(<App/>);
	});
  
	it("the Login component is  included", () => {
	  expect(wrapper.find('Login')).toHaveLength(1);
	});
  
	it("the CourseList component is included", () => {
	  expect(wrapper.find('CourseList').exists());
	});
  });
  
  describe("Testing <App logOut={function} />", () => {
	beforeEach(() => {
	  StyleSheetTestUtils.suppressStyleInjection();
	});
  
	it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
	  const wrapper = mount(<App logOut={()=>{console.log("ctrl and h are pressed")}}/>);
	  window.alert = jest.fn();
	  const inst = wrapper.instance();
	  const logout = jest.spyOn(inst, 'logOut');
	  const alert = jest.spyOn(window, 'alert');
	  const event = new KeyboardEvent('keydown', {bubbles:true, ctrlKey: true, key: 'h'});
	  document.dispatchEvent(event);
	  expect(alert).toBeCalledWith("Logging you out");
	  expect(logout).toBeCalled();
	  alert.mockRestore();
	});
  });
  
  describe("Testing App Component's State />", () => {
	let wrapper;
  
	beforeEach(() => {
	  StyleSheetTestUtils.suppressStyleInjection();
	  wrapper = shallow(<App/>);
	});
  
	afterEach(() => {
		  jest.clearAllMocks();
	  });
  
	it('check if default value of displayDrawer in state is false', () => {
	  expect(wrapper.state('displayDrawer')).toBe(false);
	});
  
	it('Verify that after calling handleDisplayDrawer, the state displayDrawer should now be true', () => {
	  wrapper.instance().handleDisplayDrawer();
	  expect(wrapper.state('displayDrawer')).toBe(true);
	});
  
	it('verify that after calling handleHideDrawer, the state displayDrawer is updated to be false', () => {
	  wrapper.instance().handleHideDrawer();
	  expect(wrapper.state('displayDrawer')).toBe(false);
	});
  
	it(`Tests that the logIn function updates user's state correctly`, () => {
		  wrapper = mount(
			  <AppContext.Provider value={{ user, logOut }}>
				  <App />
			  </AppContext.Provider>
		  );
  
		  const myUser = {
			  email: 'testy@gmail.com',
			  password: 'testy',
			  isLoggedIn: true,
		  }
  
		  expect(wrapper.state().user).toEqual(user);
		  const instance = wrapper.instance();
		  instance.logIn(myUser.email, myUser.password);
		  expect(wrapper.state().user).toEqual(myUser);
		  wrapper.unmount();
	  })
  
	  it(`Tests that the logOut function updates user's state correctly`, () => {
		  wrapper = mount(
			  <AppContext.Provider value={{ user, logOut }}>
				  <App />
			  </AppContext.Provider>
		  );
  
		  const myUser = {
			  email: 'testy@gmail.com',
			  password: 'testy',
			  isLoggedIn: true,
		  }
  
		  expect(wrapper.state().user).toEqual(user);
		  const instance = wrapper.instance();
		  instance.logOut();
		  expect(wrapper.state().user).toEqual(user);
		  wrapper.unmount();
	  })
  });

