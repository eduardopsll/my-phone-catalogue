import { marbles } from "rxjs-marbles/mocha";

import { fetchPhones, fetchPhonesSuccess } from "../actions";
import { fetchPhonesEpic$ } from "../epics";

import phonesMock from "../../mocks/phones.json";

jest.mock("../../utils");

// eslint-disable-next-line import/first
import { Http } from "../../utils";

describe("fetchPhonesEpic", () => {
  it(
    "should dispatch fetchPhonesSuccess action",
    marbles(m => {
      const action$ = m.hot("---a", {
        a: fetchPhones()
      });
      const state$ = null;
      Http.getPhones$ = m.cold("-a", { a: phonesMock });

      const output$ = fetchPhonesEpic$(action$, state$, Http);
      m.expect(output$).toBeObservable(
        m.cold("----a", {
          a: fetchPhonesSuccess(phonesMock)
        })
      );
    })
  );
});
