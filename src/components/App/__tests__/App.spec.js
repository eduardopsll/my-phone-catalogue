import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { render } from "@testing-library/react";

import { App } from "../App";
import { fetchPhones } from "../../../redux/actions";

const mockDispatch = jest.fn();
jest.mock("react-redux");
useDispatch.mockImplementation(() => mockDispatch);
useSelector.mockImplementation(jest.fn());
jest.mock("../../List/List");
jest.mock("../../Spinner/Spinner");
jest.mock("../../Card/Card");

describe("App", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should dispatch action to fetch phone list", done => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div, () => {
      expect(mockDispatch).toHaveBeenCalledWith(fetchPhones());
      done();
    });
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

    it("should render List and Card components", () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId("list")).toBeInTheDocument();
      expect(getByTestId("card")).toBeInTheDocument();
    });
  });
});
