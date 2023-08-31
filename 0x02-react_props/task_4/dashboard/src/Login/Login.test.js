import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe('<Login />', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exits()).toEqual(true);
  });
  it("it renders two input tags and two label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).to.have.lengthOf(2);
    expect(wrapper.find("input")).to.have.lengthOf(2);
  });
});
