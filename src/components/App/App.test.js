import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("renders App", () => {
  const { getByText } = render(<App />);
  const header = getByText(/My Phone Catalogue/i);
  expect(header).toBeInTheDocument();
});
