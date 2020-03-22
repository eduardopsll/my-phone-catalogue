import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Card.module.scss";
import { selectPhoneSelected } from "../../redux/selectors";
import closeIcon from "../../assets/icons/close.svg";
import { resetPhoneSelected, setPhoneSelected } from "../../redux/actions";
import { useParams } from "react-router-dom";

function Card() {
  const phone = useSelector(selectPhoneSelected);
  const dispatch = useDispatch();
  const id = +useParams().id;
  const styleColor = {
    backgroundColor: phone ? phone.color : ""
  };

  const closeCard = () => {
    dispatch(resetPhoneSelected());
  };

  useEffect(() => {
    if (!isNaN(id)) {
      dispatch(setPhoneSelected(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!phone) {
    return null;
  }
  return (
    <div className={styles.card}>
      <div className={styles.card__close}>
        <img
          data-testid="closeCard"
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
