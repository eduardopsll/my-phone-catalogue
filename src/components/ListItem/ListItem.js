import React from "react";
import phoneIcon from "../../assets/icons/phone.svg";
import chevronIcon from "../../assets/icons/chevron.svg";

import styles from "./ListItem.module.scss";

function ListItem({ data, selectItemFn }) {
  return (
    <li className={styles["list-item"]} onClick={e => selectItemFn(data.id, e)}>
      <div className={styles["list-item__info-wrapper"]}>
        <img src={phoneIcon} className={styles["list-item__phone-icon"]} alt="phone-icon" />
        <div className={styles["list-item__text-wrapper"]}>
          {data.name}
          <span className={styles["list-item__text-subtitle"]}>{data.manufacturer}</span>
        </div>
        <div className={styles["list-item__price"]}>{data.price}€</div>
      </div>
      <img src={chevronIcon} className={styles["list-item__chevron-icon"]} alt="chevron-icon" />
    </li>
  );
}

export default ListItem;
