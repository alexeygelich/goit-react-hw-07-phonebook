import React from "react";
import { CSSTransition } from "react-transition-group";
import Alert from "../../shared/Alert";
import styles from "./FormAddContacts.module.css";

export default function FormAddContacts({
  name,
  number,
  isAdded,
  message,
  handlesubmit,
  handleChangeName,
  handleChangeNumber,
}) {
  return (
    <>
      <form className={styles.form} onSubmit={handlesubmit}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            placeholder="Name Surname"
            value={name}
            onChange={(e) => handleChangeName(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Number
          <input type="tel" placeholder="Phone" value={number} onChange={(e) => handleChangeNumber(e.target.value)} />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
      <CSSTransition in={isAdded} timeout={500} classNames="fade-alert" unmountOnExit>
        <Alert message={message} />
      </CSSTransition>
    </>
  );
}
