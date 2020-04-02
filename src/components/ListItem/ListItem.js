import React from "react";
import phoneIcon from "../../assets/icons/phone.svg";
import chevronIcon from "../../assets/icons/chevron.svg";

import styles from "./ListItem.module.scss";
import { Link } from "react-router-dom";

function ListItem({ data, selectedItem }) {
  const classSelectedItem = selectedItem === data.id ? styles["list-item--selected"] : "";
  return (
    <li>
      <Link className={`${styles["list-item"]} ${classSelectedItem}`} to={`/${data.id}`}>
        <div className={styles["list-item__info-wrapper"]}>
          <img src={phoneIcon} className={styles["list-item__phone-icon"]} alt="phone-icon" />
          <div className={styles["list-item__text-wrapper"]}>
            {data.name}
            <span className={styles["list-item__text-subtitle"]}>{data.manufacturer}</span>
          </div>
          <div className={styles["list-item__price"]}>{data.price}€</div>
        </div>
        <img src={chevronIcon} className={styles["list-item__chevron-icon"]} alt="chevron-icon" />
      </Link>
    </li>
  );
}

export default ListItem;
