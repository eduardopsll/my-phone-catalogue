import reducer from "../reducers";
import { fetchPhones, fetchPhonesSuccess, setPhoneSelected, resetPhoneSelected } from "../actions";

import phonesMock from "../../mocks/phones.json";

describe("Reducers", () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      isFetchingPhones: false,
      phoneList: [],
      phoneSelected: null
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
  describe("Selecting a phone", () => {
    it("Set phone selected", () => {
      const state = reducer(initialState, setPhoneSelected(2));
      expect(state.phoneSelected).toEqual(2);
    });

    it("Reset phone selected", () => {
      initialState.phoneSelected = 3;

      const state = reducer(initialState, resetPhoneSelected());

      expect(state.phoneSelected).toEqual(null);
    });
  });
});
