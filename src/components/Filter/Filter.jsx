import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";
import styles from "./Filter.module.css";

const Filter = ({ filter, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label className={styles.label}>
      Find Contacts
      <input type="text" placeholder="name" value={filter} onChange={handleChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter,
});

const mapDispatchToprops = {
  onChange: phonebookActions.filter,
};

export default connect(mapStateToProps, mapDispatchToprops)(Filter);
