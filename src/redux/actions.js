import {
  FETCH_PHONES,
  FETCH_PHONES_SUCESS,
  SET_PHONE_SELECTED,
  RESET_PHONE_SELECTED
} from "./actionTypes";

export const fetchPhones = () => ({
  type: FETCH_PHONES
});

export const fetchPhonesSuccess = phoneList => ({
  type: FETCH_PHONES_SUCESS,
  payload: {
    phoneList
  }
});

export const setPhoneSelected = phoneSelected => ({
  type: SET_PHONE_SELECTED,
  payload: {
    phoneSelected
  }
});

export const resetPhoneSelected = () => ({
  type: RESET_PHONE_SELECTED
});
