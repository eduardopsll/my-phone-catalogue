import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";

import ListItem from "../ListItem";
import phonesMock from "../../../mocks/phones.json";

describe("ListItem", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListItem data={phonesMock[0]} />, div);
  });
  it("should call the selectItemFn when clicking over the list item", () => {
    const div = document.createElement("div");
    const selectItemFnMock = jest.fn();

    ReactDOM.render(<ListItem data={phonesMock[0]} selectItemFn={selectItemFnMock} />, div);

    const liNode = div.querySelector("li");
    ReactTestUtils.Simulate.click(liNode);
    expect(selectItemFnMock).toHaveBeenCalledTimes(1);
  });
});
