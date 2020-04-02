import { marbles } from "rxjs-marbles/mocha";

import { default as Http } from "../http";
import phonesMock from "../../mocks/phones.json";

jest.mock("../../environment", () => ({
  USE_FAKE_BACKEND: true
}));

describe("GetPhones", () => {
  it(
    "should return the response",
    marbles(m => {
      m.expect(Http.getPhones$).toBeObservable(
        m.cold("2000ms (b|)", {
          b: phonesMock
        })
      );
    })
  );
});
