import {
  FETCH_PHONES,
  FETCH_PHONES_SUCESS,
  SET_PHONE_SELECTED,
  RESET_PHONE_SELECTED
} from "./actionTypes";

const initialState = {
  isFetchingPhones: false,
  phoneList: [],
  phoneSelected: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHONES:
      return {
        ...state,
        isFetchingPhones: true
      };
    case FETCH_PHONES_SUCESS:
      const { phoneList } = action.payload;
      return {
        ...state,
        isFetchingPhones: false,
        phoneList
      };
    case SET_PHONE_SELECTED:
      const { phoneSelected } = action.payload;
      return {
        ...state,
        phoneSelected
      };
    case RESET_PHONE_SELECTED:
      return {
        ...state,
        phoneSelected: null
      };
    default:
      return state;
  }
}
