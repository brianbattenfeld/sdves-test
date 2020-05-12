import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import Component1 from "./Component1";

it("renders Component1 test", () => {
  const { getByText } = render(<Component1 />);
  const componentElement = getByText(/sample component/i);
  expect(componentElement).toBeInTheDocument();
});

it("renders correctly, the same as last time", () => {
  const tree = renderer.create(<Component1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
