import React from "react";
import { render } from "@testing-library/react";
import Spinner from "./Spinner";

test("renders spinner", () => {
  const { getByTestId } = render(<Spinner />);
  const spinnerDiv = getByTestId("spinner");
  expect(spinnerDiv).toBeVisible();
});
