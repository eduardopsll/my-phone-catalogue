import reducer from "../reducers";
import { fetchPhones, fetchPhonesSuccess } from "../actions";

import phonesMock from "../../mocks/phones.json";

let initialState;

beforeEach(() => {
  initialState = {
    isFetchingPhones: false,
    phoneList: []
  };
});

describe("Fetching phones", () => {
  it("Start fetching", () => {
    const state = reducer(initialState, fetchPhones());
    expect(state.isFetchingPhones).toEqual(true);
  });

  it("Succesful fetch", () => {
    initialState.isFetchingPhones = true;

    const state = reducer(initialState, fetchPhonesSuccess(phonesMock));

    expect(state.isFetchingPhones).toEqual(false);
    expect(state.phoneList).toEqual(phonesMock);
  });
});
