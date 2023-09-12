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