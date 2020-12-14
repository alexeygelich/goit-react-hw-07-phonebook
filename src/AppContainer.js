import React, { Component } from "react";
import { connect } from "react-redux";
import phonebookSelectors from "./redux/phonebook/phonebookSelectors";
import phonbookOperation from "./redux/phonebook/phonebookOperation";
import App from "./App";

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  fetchContact: phonbookOperation.fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
