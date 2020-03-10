import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { App } from "../App";
import { render } from "@testing-library/react";

const mockDispatch = jest.fn();
jest.mock("react-redux");
useDispatch.mockImplementation(() => mockDispatch);
useSelector.mockImplementation(jest.fn());
jest.mock("../../List/List");
jest.mock("../../Spinner/Spinner");

describe("App", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should dispatch action to fetch phone list", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    expect(mockDispatch).toBeCalled();
  });

  describe("Fetching phones", () => {
    beforeAll(() => {
      useSelector.mockImplementation(selectorFn => selectorFn({ isFetchingPhones: true }));
    });

    it("should render Spinner component", () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId("spinner")).toBeInTheDocument();
    });
  });
  describe("Not fetching phones", () => {
    beforeAll(() => {
      useSelector.mockImplementation(selectorFn => selectorFn({ isFetchingPhones: false }));
    });

    it("should render List component", () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId("list")).toBeInTheDocument();
    });
  });
});
