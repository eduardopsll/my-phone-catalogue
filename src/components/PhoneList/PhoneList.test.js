import React from "react";
import { render } from "@testing-library/react";
import PhoneList from "./PhoneList";

test("renders spinner", () => {
  const { getByText } = render(<PhoneList />);
  const phoneList = getByText("PhoneList");
  expect(phoneList).toBeVisible();
});
