import React from "react";
import ReactDOM from "react-dom";

import ListItem from "../ListItem";
import phonesMock from "../../../mocks/phones.json";

describe("ListItem", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListItem data={phonesMock[0]} />, div);
  });
});
