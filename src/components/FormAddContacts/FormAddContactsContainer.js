import { connect } from "react-redux";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import phonebookOperations from "../../redux/phonebook/phonebookOperation";
import FormAddContacts from './FormAddContacts'


const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToprops = {
  addContact: phonebookOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToprops)(FormAddContacts);