import React from "react";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import "./ContactList.css";

const ContactList = ({ contacts, filter }) => {
  const getFiteredContact = (items, query) => {
    return items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  };

  const visibleContacts = getFiteredContact(contacts, filter);

  return (
    <TransitionGroup component="ul" className="contact-list">
      {visibleContacts.map((el) => {
        return (
          <CSSTransition key={el.id} timeout={500} classNames="item">
            <ContactItem el={el} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items,
  filter: contacts.filter,
});

export default connect(mapStateToProps)(ContactList);
