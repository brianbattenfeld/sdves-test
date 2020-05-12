import React from "react";
import { render } from "@testing-library/react";
import Component1 from "./Component1";

test("renders Component1 test", () => {
  const { getByText } = render(<Component1 />);
  const componentElement = getByText(/sample component/i);
  expect(componentElement).toBeInTheDocument();
});
