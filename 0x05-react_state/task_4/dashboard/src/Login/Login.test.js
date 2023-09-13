import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists()).toEqual(true);
	});

	it('should have 2 input tags and 2 label tags', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('label')).toHaveLength(2);
		expect(wrapper.find('input')).toHaveLength(2);
	});

	it("verify that the submit button is disabled by default", () => {
		const wrapper = shallow(<Login />)
		expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
	});

	it("verify that after changing the value of the two inputs, the button is enabled", () => {
		const wrapper = shallow(<Login />)
		wrapper.find({ name: "email" }).simulate('change', { target: { value: 't' } });
		wrapper.find({ name: "password" }).simulate('change', { target: { value: 't' } });
		expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
	});
});
