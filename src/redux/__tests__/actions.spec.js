import { fetchPhones, fetchPhonesSuccess } from "../actions";
import { FETCH_PHONES, FETCH_PHONES_SUCESS } from "../actionTypes";

import phonesMock from "../../mocks/phones.json";

describe("Actions", () => {
  it("FETCH_PHONES action", () => {
    expect(fetchPhones()).toEqual({
      type: FETCH_PHONES
    });
  });
  it("FETCH_PHONES_SUCESS action", () => {
    expect(fetchPhonesSuccess(phonesMock)).toEqual({
      type: FETCH_PHONES_SUCESS,
      payload: { phoneList: phonesMock }
    });
  });
});
