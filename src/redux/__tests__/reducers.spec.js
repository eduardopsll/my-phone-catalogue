import reducer from "../reducers";
import { fetchPhones, fetchPhonesSuccess } from "../actions";

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
    const phoneListMock = ["phone1", "phone2"];
    initialState.isFetchingPhones = true;

    const state = reducer(initialState, fetchPhonesSuccess(phoneListMock));

    expect(state.isFetchingPhones).toEqual(false);
    expect(state.phoneList).toEqual(phoneListMock);
  });
});
