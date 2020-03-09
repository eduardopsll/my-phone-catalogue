import { fetchPhones, fetchPhonesSuccess } from "../actions";
import { FETCH_PHONES, FETCH_PHONES_SUCESS } from "../actionTypes";

describe("Actions", () => {
  it("FETCH_PHONES action", () => {
    expect(fetchPhones()).toEqual({
      type: FETCH_PHONES
    });
  });
  it("FETCH_PHONES_SUCESS action", () => {
    const mockPhoneList = ["phone1", "phone2"];
    expect(fetchPhonesSuccess(mockPhoneList)).toEqual({
      type: FETCH_PHONES_SUCESS,
      payload: { phoneList: mockPhoneList }
    });
  });
});
