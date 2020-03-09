import React from "react";
import ReactDOM from "react-dom";

import Spinner from "../Spinner";

describe("Spinner", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Spinner />, div);
  });
});
