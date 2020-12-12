import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";
import styles from "./Filter.module.css";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";

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

const mapStateToProps = (state) => ({
  filter: phonebookSelectors.getFilter(state),
});

const mapDispatchToprops = {
  onChange: phonebookActions.filter,
};

export default connect(mapStateToProps, mapDispatchToprops)(Filter);
