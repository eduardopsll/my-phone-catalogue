export const selectIsFetching = ({ isFetchingPhones }) => isFetchingPhones;
export const selectPhoneList = ({ phoneList }) => phoneList;
export const selectPhoneSelected = ({ phoneList, phoneSelected }) => {
  const phone = phoneList.find(phone => phone.id === phoneSelected);
  return phone || null;
};
export const selectPhoneIdSelected = ({ phoneSelected }) => phoneSelected;
