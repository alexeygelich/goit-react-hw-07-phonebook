import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import phonebookOperations from "../../redux/phonebook/phonebookOperation";
import Alert from "../../shared/Alert";
import styles from "./FormAddContacts.module.css";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";

class FormAddContacts extends Component {
  state = {
    name: "",
    number: "",
    isAdded: false,
    message: "",
  };

  handleChangeName = (name) => {
    this.setState({ name });
  };

  handleChangeNumber = (number) => {
    this.setState({ number });
  };

  handleClearForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (!name || !number) {
      this.setState({ isAdded: true, message: "Fill in all the fields" });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 2000);
      return;
    }

    if (contacts.find((el) => el.name === name)) {
      this.setState({ isAdded: true, message: "Contact already exist" });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 2000);
    } else {
      this.props.addContact({ name, number });
      this.setState({ isAdded: true, message: "Contact added successfully" });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 2000);
    }
    this.handleClearForm();
  };

  render() {
    const { name, number, isAdded, message } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handlesubmit}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              placeholder="Name Surname"
              value={name}
              onChange={(e) => this.handleChangeName(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              type="tel"
              placeholder="Phone"
              value={number}
              onChange={(e) => this.handleChangeNumber(e.target.value)}
            />
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
}

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToprops = {
  addContact: phonebookOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToprops)(FormAddContacts);
