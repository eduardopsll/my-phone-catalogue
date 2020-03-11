import { of, iif } from "rxjs";
import { ajax } from "rxjs/ajax";
import { delay, map, catchError } from "rxjs/operators";

import environment from "../environment";
import phonesMock from "../mocks/phones.json";

const getPhones$ = iif(
  () => environment.USE_FAKE_BACKEND,
  of({ response: phonesMock }),
  ajax(environment.API_URL + "/phones")
).pipe(
  delay(2000),
  map(response => (response && response.response ? response.response : [])),
  catchError(error => {
    console.error(error);
    return of([]);
  })
);

export default { getPhones$ };
