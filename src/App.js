import React, { Component } from "react";
import FormAddContacts from "./components/FormAddContacts";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { CSSTransition } from "react-transition-group";
import phonbookOperation from "./redux/phonebook/phonebookOperation";
import Container from "./shared/Container";
import "./App.css";
import { connect } from "react-redux";
import phonebookSelectors from './redux/phonebook/phonebookSelectors'

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const { contacts } = this.props;

    return (
      <Container>
        <section>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade-logo" unmountOnExit>
            <h2 className="logo">Phonebook</h2>
          </CSSTransition>
          <FormAddContacts />
        </section>
        <section>
          <h2>Contacts</h2>
          <CSSTransition in={contacts.length > 1} timeout={500} classNames="fade-filter" unmountOnExit>
            <Filter />
          </CSSTransition>

          <ContactList />
        </section>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  fetchContact: phonbookOperation.fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
