import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Card.module.scss";
import { selectPhoneSelected } from "../../redux/selectors";
import closeIcon from "../../assets/icons/close.svg";
import { resetPhoneSelected } from "../../redux/actions";

function Card() {
  const phone = useSelector(selectPhoneSelected);
  const dispatch = useDispatch();
  const styleColor = {
    backgroundColor: phone ? phone.color : ""
  };

  function closeCard() {
    dispatch(resetPhoneSelected());
  }

  if (!phone) {
    return null;
  }
  return (
    <div className={styles.card}>
      <div className={styles.card__close}>
        <img
          src={closeIcon}
          className={styles["card__close-icon"]}
          alt="close phone selected"
          onClick={closeCard}
        />
      </div>
      <div className={styles.card__info}>
        <img
          src={"/images/" + phone.imageFileName}
          className={styles["card__image"]}
          alt={phone.name + " " + phone.manufacturer}
        />
        <div className={styles.card__text}>
          <div className={styles.characteristics}>
            <h1 className={styles.card__title}>{phone.name}</h1>
            <p className={styles.card__subtitle}>{phone.manufacturer}</p>
            <p className={styles.card__characteristic}>Screen: {phone.screen}</p>
            <p className={styles.card__characteristic}>Processor: {phone.processor}</p>
            <p className={styles.card__characteristic}>Ram: {phone.ram}</p>
            <p className={styles.card__characteristic}>
              Color: <span className={styles["card__color-sample"]} style={styleColor}></span>{" "}
              {phone.color}
            </p>
          </div>
          <p className={styles.description}>{phone.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
