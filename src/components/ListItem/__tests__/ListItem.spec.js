import React from "react";
import ReactDOM from "react-dom";

import ListItem from "../ListItem";
import phonesMock from "../../../mocks/phones.json";
import { MemoryRouter } from "react-router-dom";

describe("ListItem", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <ListItem data={phonesMock[0]} />
      </MemoryRouter>,
      div
    );
  });
  it("should add class selected when item is the selected one", () => {
    const div = document.createElement("div");
    const selectItemFnMock = jest.fn();

    ReactDOM.render(
      <MemoryRouter>
        <ListItem data={phonesMock[0]} selectedItem={0} selectItemFn={selectItemFnMock} />
      </MemoryRouter>,
      div
    );

    const liNode = div.querySelector("li");
    expect(liNode).toMatchSnapshot();
  });
  it("should not add class selected when there is no item selected", () => {
    const div = document.createElement("div");
    const selectItemFnMock = jest.fn();

    ReactDOM.render(
      <MemoryRouter>
        <ListItem data={phonesMock[0]} selectedItem={null} selectItemFn={selectItemFnMock} />
      </MemoryRouter>,
      div
    );

    const liNode = div.querySelector("li");
    expect(liNode).toMatchSnapshot();
  });
  it("should not add class selected when item is not the selected one", () => {
    const div = document.createElement("div");
    const selectItemFnMock = jest.fn();

    ReactDOM.render(
      <MemoryRouter>
        <ListItem data={phonesMock[0]} selectedItem={null} selectItemFn={selectItemFnMock} />
      </MemoryRouter>,
      div
    );

    const liNode = div.querySelector("li");
    expect(liNode).toMatchSnapshot();
  });
});
