import { of } from "rxjs";
import { delay } from "rxjs/operators";

import phonesMock from "../mocks/phones.json";

const getPhones$ = of(phonesMock).pipe(delay(2000));

export default { getPhones$ };
