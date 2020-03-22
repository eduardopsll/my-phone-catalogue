import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import phonesMock from "../../../mocks/phones.json";
import Card from "../Card";
import { setPhoneSelected, resetPhoneSelected } from "../../../redux/actions";
import { JestUtils } from "../../../utils";
import { act } from "react-dom/test-utils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn()
}));
jest.mock("react-router-dom", () => ({
  useParams: jest.fn()
}));
jest.useFakeTimers();

let container = null;

describe("Card", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe("Param id undefined", () => {
    beforeEach(() => {
      mockDispatch.mockClear();
      useParams.mockReturnValue({ id: undefined });
    });
    it("should render an empty component if there is not item selected", () => {
      useSelector.mockReturnValue(null);
      ReactDOM.render(<Card />, container);
      expect(container).toMatchSnapshot();
    });
    it("should render the data of the item selected", () => {
      useSelector.mockReturnValue(phonesMock[1]);
      ReactDOM.render(<Card />, container);
      expect(container).toMatchSnapshot();
    });
    it("should not dispatch a selection of the item if the param id is not defined", () => {
      ReactDOM.render(<Card />, container);
      JestUtils.runAll();
      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
  describe("Param id defined", () => {
    beforeEach(() => {
      mockDispatch.mockClear();
    });
    it("should dispatch a selection of the item if the param id is defined", () => {
      useParams.mockReturnValue({ id: "2" });
      ReactDOM.render(<Card />, container);
      JestUtils.runAll();
      expect(mockDispatch).toHaveBeenCalledWith(setPhoneSelected(2));
    });
    it("should dispatch a reset when clicking the close Img", () => {
      useSelector.mockReturnValue(phonesMock[1]);

      ReactDOM.render(<Card />, container);
      const img = container.querySelector("[data-testid=closeCard]");
      act(() => {
        img.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      JestUtils.runAll();
      expect(mockDispatch).toHaveBeenCalledWith(resetPhoneSelected());
    });
  });
});
