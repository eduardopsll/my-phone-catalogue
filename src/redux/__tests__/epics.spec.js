import { marbles } from "rxjs-marbles/mocha";

import { fetchPhones, fetchPhonesSuccess } from "../actions";
import { fetchPhonesEpic$ } from "../epics";

jest.mock("../../utils");

// eslint-disable-next-line import/first
import { Http } from "../../utils";

describe("fetchPhonesEpic", () => {
  const phoneList = ["phone1", "phone2"];

  it(
    "should dispatch fetchPhonesSuccess action",
    marbles(m => {
      const action$ = m.hot("---a", {
        a: fetchPhones()
      });
      const state$ = null;
      Http.getPhones$ = m.cold("-a", { a: phoneList });

      const output$ = fetchPhonesEpic$(action$, state$, Http);
      m.expect(output$).toBeObservable(
        m.cold("----a", {
          a: fetchPhonesSuccess(phoneList)
        })
      );
    })
  );
});
