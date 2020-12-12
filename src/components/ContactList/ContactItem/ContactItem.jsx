import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";
import { connect } from "react-redux";
import phonebookOperation from "../../../redux/phonebook/phonebookOperation";

const ContactItem = ({ el, handleDelete }) => {
  const { name, number, id } = el;
  const handleClick = () => {
    handleDelete(id);
  };
  return (
    <li className={styles.listItem}>
      <span>{name}:</span> <span>{number}</span>
      <button className={styles.button} type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  el: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  handleDelete: phonebookOperation.removeContact,
};

export default connect(null, mapDispatchToProps)(ContactItem);
