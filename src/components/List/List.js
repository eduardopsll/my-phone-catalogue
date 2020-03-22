import React from "react";
import { useSelector } from "react-redux";

import { selectPhoneList, selectPhoneIdSelected } from "../../redux/selectors";
import { ListItem } from "../ListItem";

import styles from "./List.module.scss";

function List() {
  const list = useSelector(selectPhoneList);
  const selectedItem = useSelector(selectPhoneIdSelected);
  const classSelectedItem = selectedItem !== null ? styles["list--selected"] : "";
  return (
    <ul className={`${styles.list} ${classSelectedItem}`}>
      {list.map(item => (
        <ListItem key={item.id} data={item} selectedItem={selectedItem} />
      ))}
    </ul>
  );
}

export default List;
