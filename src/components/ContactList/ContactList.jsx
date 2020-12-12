import React from "react";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import "./ContactList.css";

const ContactList = ({ visibleContacts }) => {
  return (
    <TransitionGroup component="ul" className="contact-list">
      {visibleContacts.map((el) => {
        return (
          <CSSTransition key={el.id} timeout={500} classNames="item">
            <ContactItem id={el.id} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => ({
  visibleContacts: phonebookSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
