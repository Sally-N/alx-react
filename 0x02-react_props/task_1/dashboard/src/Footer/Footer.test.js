import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe('<Footer />', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exits()).toEqual(true);
  });
  it("it renders the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).to.contain("Copyright");
  });
});
