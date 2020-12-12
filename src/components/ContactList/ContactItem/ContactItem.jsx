import React from "react";
import styles from "./ContactItem.module.css";
import { connect } from "react-redux";
import phonebookOperation from "../../../redux/phonebook/phonebookOperation";
import phonebookSelectors from "../../../redux/phonebook/phonebookSelectors";

const ContactItem = ({ name, number, id, handleDelete }) => {
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

const mapStateToProps = (state, ownProps) => ({
  ...phonebookSelectors.getContactById(state, ownProps.id),
});

const mapDispatchToProps = {
  handleDelete: phonebookOperation.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
