import React from "react";
import ReactDOM from "react-dom";

import { Card } from "../index";

jest.mock("react-redux");

describe("Card", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
  });
});
