import { connect } from "react-redux";
import phonebookSelectors from "./redux/phonebook/phonebookSelectors";
import phonbookOperation from "./redux/phonebook/phonebookOperation";
import App from './App'

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  fetchContact: phonbookOperation.fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);