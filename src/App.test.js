import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test("make sure there are at least 2 items", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().items.length).toBeGreaterThan(2);
});
