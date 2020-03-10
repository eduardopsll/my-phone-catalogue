import { fetchPhones, fetchPhonesSuccess, setPhoneSelected, resetPhoneSelected } from "../actions";
import {
  FETCH_PHONES,
  FETCH_PHONES_SUCESS,
  SET_PHONE_SELECTED,
  RESET_PHONE_SELECTED
} from "../actionTypes";

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
  it("SET_PHONE_SELECTED action", () => {
    expect(setPhoneSelected(1)).toEqual({
      type: SET_PHONE_SELECTED,
      payload: { phoneSelected: 1 }
    });
  });
  it("RESET_PHONE_SELECTED action", () => {
    expect(resetPhoneSelected()).toEqual({
      type: RESET_PHONE_SELECTED
    });
  });
});
