import { combineEpics } from "redux-observable";
import { ofType } from "redux-observable";
import { switchMap, map } from "rxjs/operators";

import { FETCH_PHONES } from "./actionTypes";
import { fetchPhonesSuccess } from "./actions";
import { Http } from "../utils";

export const fetchPhonesEpic$ = action$ =>
  action$.pipe(
    ofType(FETCH_PHONES),
    switchMap(() => {
      return Http.getPhones$;
    }),
    map(phones => fetchPhonesSuccess(phones))
  );

export const rootEpic = combineEpics(fetchPhonesEpic$);
