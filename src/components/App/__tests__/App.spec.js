import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { App } from "../App";
import { fetchPhones } from "../../../redux/actions";
import { MemoryRouter } from "react-router-dom";
import jestUtils from "../../../utils/jest.utils";

const mockDispatch = jest.fn();
jest.mock("react-redux");
useDispatch.mockImplementation(() => mockDispatch);
useSelector.mockImplementation(jest.fn());
jest.mock("../../List/List");
jest.mock("../../Spinner/Spinner");
jest.mock("../../Card/Card");

jest.useFakeTimers();

let container = null;
describe("App", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    mockDispatch.mockClear();
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render without crashing", () => {
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      container
    );
  });

  it("should dispatch action to fetch phone list", () => {
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      container
    );
    jestUtils.runAll();
    expect(mockDispatch).toHaveBeenCalledWith(fetchPhones());
  });

  describe("Fetching phones", () => {
    beforeAll(() => {
      useSelector.mockImplementation(selectorFn => selectorFn({ isFetchingPhones: true }));
    });

    it("should render Spinner component", () => {
      ReactDOM.render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
        container
      );
      expect(container.querySelector('[data-testid="spinner"]')).toBeTruthy();
    });
  });
  describe("Not fetching phones", () => {
    beforeAll(() => {
      useSelector.mockImplementation(selectorFn => selectorFn({ isFetchingPhones: false }));
    });

    it("should render the list as there is not item selected", () => {
      ReactDOM.render(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>,
        container
      );
      expect(container.querySelector('[data-testid="list"]')).toBeTruthy();
    });

    it("should render List and fallback of the lazyCard components with a item selected", () => {
      ReactDOM.render(
        <MemoryRouter initialEntries={["/1"]}>
          <App />
        </MemoryRouter>,
        container
      );
      expect(container.querySelector('[data-testid="list"]')).toBeTruthy();
      expect(container.querySelector('[data-testid="spinner"]')).toBeTruthy();
    });
  });
});
