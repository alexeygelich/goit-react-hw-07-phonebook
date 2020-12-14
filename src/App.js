import React from "react";
import FormAddContactsContainer from "./components/FormAddContacts/FormAddContactsContainer";
import FilterContainer from "./components/Filter/FilterContainer";
import ContactListContainer from "./components/ContactList/ContactListContainer";
import { CSSTransition } from "react-transition-group";
import Container from "./shared/Container";
import "./App.css";

export default function App({ contacts,onIncrement,counterValue }) {
  return (
    <Container>
      <section>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade-logo" unmountOnExit>
          <h2 className="logo">Phonebook</h2>
        </CSSTransition>
        <FormAddContactsContainer />
      </section>
      <section>
        <h2>Contacts</h2>
        <CSSTransition in={contacts.length > 1} timeout={500} classNames="fade-filter" unmountOnExit>
          <FilterContainer />
        </CSSTransition>

        <ContactListContainer />
      </section>
    </Container>
  );
}
