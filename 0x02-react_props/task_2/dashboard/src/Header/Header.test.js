import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe('<Header />', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exits()).toEqual(true);
  });
  it("should render a h1 ", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img")).to.have.lengthOf(1);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});	
