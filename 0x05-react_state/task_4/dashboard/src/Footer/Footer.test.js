import React from "react";
import { shallow } from 'enzyme';
import Footer from './Footer';
import { getFooterCopy, getFullYear } from "../utils/utils";

describe('Test for footer component', () => {
    it("should render without crashing", function() {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('"should render the text Copyright', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toEqual(
            `Copyright ${getFullYear()} - ${getFooterCopy(true)}`
        );
    });
});

describe('Testing Footer Component context and state', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that there is no link rendered when user is logged out within context', () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			}
		}

		const wrapper = mount(
			<UserContext.Provider value={context}>
				<Footer />
			</UserContext.Provider>
		)

		expect(wrapper.find('a').length).toBe(0);
		expect(wrapper.find('a').exists()).toBe(false);
		expect(wrapper.text()).not.toContain('Contact us');

		wrapper.unmount();
	})

	it('Tests that there is a link rendered when user is logged in within context', () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: true
			}
		}

		const wrapper = mount(
			<UserContext.Provider value={context}>
				<Footer />
			</UserContext.Provider>
		)

		expect(wrapper.find('a').length).toBe(1);
		expect(wrapper.find('a').exists()).toBe(true);
		expect(wrapper.text()).toContain('Contact us');

		wrapper.unmount();
	})
})