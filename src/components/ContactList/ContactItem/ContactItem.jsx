import React from "react";
import styles from "./ContactItem.module.css";

const ContactItem = ({ name, number, handleClick }) => {

  return (
    <li className={styles.listItem}>
      <span>{name}:</span> <span>{number}</span>
      <button className={styles.button} type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
