import {
  selectIsFetching,
  selectPhoneList,
  selectPhoneSelected,
  selectPhoneIdSelected
} from "../selectors";
import phonesMock from "../../mocks/phones.json";

describe("Selectors", () => {
  it("should select status of fetching phones", () => {
    expect(selectIsFetching({ isFetchingPhones: true })).toEqual(true);
  });
  it("should select phone list", () => {
    expect(selectPhoneList({ phoneList: phonesMock })).toEqual(phonesMock);
  });
  it("should select phone id selected", () => {
    expect(selectPhoneIdSelected({ phoneSelected: 1 })).toEqual(1);
  });
  describe("Selecting phone selected", () => {
    it("should select phone when one has been selected", () => {
      expect(selectPhoneSelected({ phoneList: phonesMock, phoneSelected: 1 })).toEqual(
        phonesMock[1]
      );
    });
    it("should select null when none has been selected", () => {
      expect(selectPhoneSelected({ phoneList: phonesMock, phoneSelected: null })).toEqual(null);
    });
    it("should select null when if the phoneSelected does not exist", () => {
      expect(selectPhoneSelected({ phoneList: phonesMock, phoneSelected: 20 })).toEqual(null);
    });
  });
});
