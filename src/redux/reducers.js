import { FETCH_PHONES, FETCH_PHONES_SUCESS } from "./actionTypes";

const initialState = {
  isFetchingPhones: false,
  phoneList: []
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
    default:
      return state;
  }
}
