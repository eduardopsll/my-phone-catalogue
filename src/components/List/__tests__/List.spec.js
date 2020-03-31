import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { useSelector } from "react-redux";

import List from "../List";
import phonesMock from "../../../mocks/phones.json";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-redux");
useSelector.mockImplementation(jest.fn());

let container = null;
describe("List", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe("List with items", () => {
    beforeEach(() => {
      useSelector.mockImplementation(selectorFn => selectorFn({ phoneList: phonesMock }));
    });

    it("should render without crashing", () => {
      ReactDOM.render(
        <MemoryRouter>
          <List />
        </MemoryRouter>,
        container
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe("List without items", () => {
    beforeEach(() => {
      useSelector.mockImplementation(selectorFn => selectorFn({ phoneList: [] }));
    });

    it("should render without crashing", () => {
      ReactDOM.render(
        <MemoryRouter>
          <List />
        </MemoryRouter>,
        container
      );
      expect(container).toMatchSnapshot();
    });
  });
});
