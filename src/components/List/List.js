import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { phoneListSelector } from "../../redux/selectors";
import { ListItem } from "../ListItem";

import styles from "./List.module.scss";
import { setPhoneSelected } from "../../redux/actions";

function List() {
  const list = useSelector(phoneListSelector);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {list.map(item => (
        <ListItem key={item.id} data={item} selectItemFn={id => dispatch(setPhoneSelected(id))} />
      ))}
    </ul>
  );
}

export default List;
