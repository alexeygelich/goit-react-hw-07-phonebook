import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filterState, handleChange }) => {

  return (
    <label className={styles.label}>
      Find Contacts
      <input type="text" placeholder="name" value={filterState} onChange={(e) => handleChange(e.target.value)} />
    </label>
  );
};

export default Filter;
