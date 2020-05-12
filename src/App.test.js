import React from "react";
import { render } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import Component1 from "./Component1/Component1";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

test("make sure there are no more than 7 items", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().items.length).toBeLessThan(8);
});
