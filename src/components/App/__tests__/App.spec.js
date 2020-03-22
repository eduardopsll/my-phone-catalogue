import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { render } from "@testing-library/react";

import { App } from "../App";
import { fetchPhones } from "../../../redux/actions";
import { MemoryRouter } from "react-router-dom";

const mockDispatch = jest.fn();
jest.mock("react-redux");
useDispatch.mockImplementation(() => mockDispatch);
useSelector.mockImplementation(jest.fn());
jest.mock("../../List/List");
jest.mock("../../Spinner/Spinner");
jest.mock("../../Card/Card");

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
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(mockDispatch).toHaveBeenCalledWith(fetchPhones());
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

    it("should render the list as there is not item selected", () => {
      const { getByTestId } = render(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );
      expect(getByTestId("list")).toBeInTheDocument();
    });

    it("should render List and Card components with a item selected", () => {
      const { getByTestId } = render(
        <MemoryRouter initialEntries={["/1"]}>
          <App />
        </MemoryRouter>
      );
      expect(getByTestId("list")).toBeInTheDocument();
      expect(getByTestId("card")).toBeInTheDocument();
    });
  });
});
