import React from "react";
import ReactDOM from "react-dom";

import PhoneList from "../PhoneList";

describe("PhoneList", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PhoneList />, div);
  });
});
