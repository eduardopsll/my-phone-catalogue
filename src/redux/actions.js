import { FETCH_PHONES, FETCH_PHONES_SUCESS } from "./actionTypes";

export const fetchPhones = () => ({
  type: FETCH_PHONES
});

export const fetchPhonesSuccess = phoneList => ({
  type: FETCH_PHONES_SUCESS,
  payload: {
    phoneList
  }
});
