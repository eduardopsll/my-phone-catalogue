import React from "react";
import { useSelector } from "react-redux";

import { phoneListSelector } from "../../redux/selectors";
import { ListItem } from "../ListItem";

import styles from "./List.module.scss";

function List() {
  const list = useSelector(phoneListSelector);

  return (
    <ul className={styles.list}>
      {list.map(item => (
        <ListItem key={item.id} data={item} />
      ))}
    </ul>
  );
}

export default List;
