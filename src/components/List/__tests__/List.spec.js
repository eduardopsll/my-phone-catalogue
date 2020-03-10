import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import List from "../List";
import phonesMock from "../../../mocks/phones.json";
jest.mock("react-redux");
useSelector.mockImplementation(jest.fn());

describe("List", () => {
  describe("List with items", () => {
    beforeEach(() => {
      useSelector.mockImplementation(selectorFn => selectorFn({ phoneList: phonesMock }));
    });

    it("should render without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<List />, div);
    });
  });

  describe("List without items", () => {
    beforeEach(() => {
      useSelector.mockImplementation(selectorFn => selectorFn({ phoneList: [] }));
    });

    it("should render without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<List />, div);
    });
  });
});
